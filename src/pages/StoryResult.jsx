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
  const [story, setStory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const childName = searchParams.get("name") || "Little One";
  const characters = searchParams.get("characters") || "magical friends";
  const theme = searchParams.get("theme") || "adventure";
  const personalMessage = searchParams.get("message") || "";

  useEffect(() => {
    const generateStory = () => {
      const themes = {
        adventure: `Once upon a time, ${childName} discovered a hidden map in their grandmother's attic. The map showed the way to the Crystal Caves, where ${characters} were waiting for a brave explorer. With courage in their heart, ${childName} packed a small bag and set off on the greatest adventure of their life.

Through enchanted forests and across sparkling rivers, ${childName} met each of the ${characters} who became their loyal companions. Together, they solved riddles, helped forest creatures, and learned that the real treasure wasn't gold or jewels, but the friendships they made along the way.

When ${childName} finally returned home, they carried with them not just memories of their incredible journey, but the knowledge that they were braver and kinder than they ever imagined. And every night before bed, ${childName} would look at the stars and know that more adventures were waiting, whenever they were ready.`,

        friendship: `In a cozy little town, ${childName} felt lonely until they discovered a secret garden where ${characters} lived. These weren't ordinary friends - they had the magical ability to understand every child's heart and make them feel truly special.

At first, ${childName} was shy, but the ${characters} welcomed them with warm smiles and open hearts. Together, they played games that sparkled with laughter, shared secrets under the old oak tree, and learned that friendship is the most powerful magic of all.

Day by day, ${childName} grew more confident, knowing they had friends who would always be there. And when other children in town felt lonely, ${childName} and the ${characters} welcomed them into their magical circle, spreading joy and friendship wherever they went.`,

        magic: `${childName} always believed in magic, and one starry night, that belief came true. A gentle voice whispered through their bedroom window, calling them to join the ${characters} in the Realm of Wonder, where anything was possible.

With a sprinkle of stardust, ${childName} was transported to a world where trees sang lullabies, flowers painted rainbows in the sky, and the ${characters} taught them to speak the language of magic. ${childName} learned to make flowers bloom with a smile and turn rain into butterfly kisses.

But the greatest magic ${childName} discovered was the magic within themselves - the power to spread joy, show kindness, and make the world a little brighter just by being who they are. When it was time to return home, ${childName} kept that magic in their heart forever.`,
      };

      const selectedStory = themes[theme] || themes.adventure;
      setStory(selectedStory);
      setIsLoading(false);
    };

    const timer = setTimeout(generateStory, 1500);
    return () => clearTimeout(timer);
  }, [childName, characters, theme]);

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
