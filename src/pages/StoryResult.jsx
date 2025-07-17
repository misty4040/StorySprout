// StoryResult.jsx
import { useState, useEffect } from "react";
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

  // Get query params from URL
  const childName = searchParams.get("name") || "Little One";
  const age = searchParams.get("age") || "6";
  const gender = searchParams.get("gender") || "Other";
  const characters = searchParams.get("characters")?.split(",") || ["magical friend"];
  const setting = searchParams.get("setting") || "Space Island";
  const theme = searchParams.get("theme") || "Curiosity and Friendship";
  const personalMessage = searchParams.get("message") || "";

  useEffect(() => {
    const generateStoryFromAPI = async () => {
      try {
        const res = await fetch("http://localhost:8081/api/story/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            childName,
            age: parseInt(age),
            gender,
            characters,
            customCharacter: "Captain Zoom",
            setting,
            customSetting: "Crystal Galaxy",
            theme,
            customTheme: "Courage",
            personalMessage,
            storyText:
              "Once upon a time, Lucas and his friends Neko and Juno set off on a thrilling quest across a floating space island filled with singing stars and glowing meteor gardens. Their bravery and teamwork helped restore light to the galaxy.",
            coverImageUrl: "https://example.com/cover-lucas.png",
            createdBy: "Ishika Gupta",
          }),
        });

        if (!res.ok) throw new Error("Failed to generate story");

        const data = await res.json();
        console.log("✅ Story received from backend:", data);
        setStory(data.storyText);
      } catch (error) {
        console.error("❌ Error fetching story:", error.message);
        setStory("Oops! We couldn't generate your story. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    generateStoryFromAPI();
  }, [childName, age, gender, characters, setting, theme, personalMessage]);

  const handleDownload = () => {
    GeneratePDF({ childName, story, personalMessage });
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full mx-auto">
        <StoryHeader />
        <StoryContent story={story} />
        {personalMessage && <PersonalMessage message={personalMessage} />}

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button
            onClick={handleDownload}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform transition hover:scale-105 flex items-center gap-2 text-lg"
          >
            <Download className="h-5 w-5" />
            Download Story as PDF
          </Button>

          <Link to="/create-story">
            <Button
              variant="outline"
              className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 hover:text-purple-600 font-semibold py-4 px-8 rounded-2xl flex items-center gap-2 text-lg"
            >
              <ArrowLeft className="h-5 w-5" />
              Create Another Adventure
            </Button>
          </Link>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600">
            Want to create another adventure?{" "}
            <Link
              to="/create-story"
              className="text-purple-600 hover:text-purple-800 font-semibold underline"
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
