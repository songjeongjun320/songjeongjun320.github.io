import Image from "next/image";
// Ensure YouTubePortfolio exists and is correctly exported
import YouTubePortfolio from "./YouTubePortfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <YouTubePortfolio />
    </div>
  );
}
