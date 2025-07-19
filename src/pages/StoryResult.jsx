import { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Download, ArrowLeft } from "lucide-react";
import Button from "../components/Button";
import GeneratePDF from "../components/GeneratePDF";
import LoadingSpinner from "../components/Loading";
import StoryHeader from "../components/StoryHeader";
import StoryContent from "../components/StoryContent";
import PersonalMessage from "../components/PersonalMessage";

const StoryResult = () => {
  const [searchParams] = useSearchParams();
  const [story, setStory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const hasFetched = useRef(false);

  // ✅ Stable query values
  const query = useMemo(() => {
    return {
      childName: searchParams.get("name") || "Little One",
      age: parseInt(searchParams.get("age") || "6"),
      gender: searchParams.get("gender") || "Other",
      characters: (searchParams.get("characters") || "magical friend").split(","),
      setting: searchParams.get("setting") || "",
      customSetting: searchParams.get("customSetting") || "",
      theme: searchParams.get("theme") || "Curiosity and Friendship",
      personalMessage: searchParams.get("message") || "",
      title: searchParams.get("title") || "A Magical Adventure",
      customTheme: searchParams.get("customTheme") || "",
      customCharacter: searchParams.get("customCharacter") || "",
    };
  }, [searchParams]);

  // ✅ API call
  const generateStoryFromAPI = async () => {
    try {
      const res = await fetch("http://localhost:8081/api/story/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          childName: query.childName,
          age: query.age,
          gender: query.gender,
          characters: query.characters,
          customCharacter: query.customCharacter,
          setting: query.setting,
          customSetting: query.customSetting,
          theme: query.theme,
          customTheme: query.customTheme,
          personalMessage: query.personalMessage,
          title: query.title,
          coverImageUrl: "https://example.com/cover-lucas.png",
          createdBy: "Ishika Gupta",
        }),
      });

      if (!res.ok) throw new Error("Failed to generate story");

      const data = await res.json();
      setStory(data.storyText);
      console.log("✅ Story received:", data.storyText);
    } catch (error) {
      console.error("❌ Error fetching story:", error.message);
      setStory("Oops! We couldn't generate your story. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    generateStoryFromAPI();
    // only on mount
    // eslint-disable-next-line
  }, []);

  const handleDownload = () => {
    GeneratePDF({
      childName: query.childName,
      story,
      personalMessage: query.personalMessage,
    });
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="w-full max-w-4xl p-8 mx-auto bg-white shadow-2xl rounded-3xl">
        <StoryHeader />
        <StoryContent story={story} />
        {query.personalMessage && (
          <PersonalMessage message={query.personalMessage} />
        )}

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            onClick={handleDownload}
            className="flex items-center gap-2 px-8 py-4 text-lg font-bold text-white transition transform shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Story as PDF
          </Button>

          <Link to="/create-story">
            <Button
              variant="outline"
              className="flex items-center gap-2 px-8 py-4 text-lg font-semibold text-purple-600 border-2 border-purple-300 hover:bg-purple-50 hover:text-purple-600 rounded-2xl"
            >
              <ArrowLeft className="w-5 h-5" />
              Create Another Adventure
            </Button>
          </Link>
        </div>

        <div className="pt-6 mt-8 text-center border-t border-gray-200">
          <p className="text-gray-600">
            Want to create another adventure?{" "}
            <Link
              to="/create-story"
              className="font-semibold text-purple-600 underline hover:text-purple-800"
            >
              Start a new story here!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryResult;
