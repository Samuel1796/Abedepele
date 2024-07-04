import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/Background Image/49681450_9307751 1.png"; // Ensure the path to your image is correct
import { useNavigate } from "react-router-dom";

const candidates = [
  { name: "Kwame Nkrumah", position: "President",image: 'https://c4.wallpaperflare.com/wallpaper/281/461/210/tattoo-snakes-tattoo-muscle-wallpaper-thumb.jpg' },
  { name: "Yaa Asantewaa", position: "President",image: 'https://c4.wallpaperflare.com/wallpaper/281/461/210/tattoo-snakes-tattoo-muscle-wallpaper-thumb.jpg' },
  { name: "Kofi Annan", position: "President" ,image: 'https://c4.wallpaperflare.com/wallpaper/281/461/210/tattoo-snakes-tattoo-muscle-wallpaper-thumb.jpg' },
  { name: "Efua Sutherland", position: "Secretary", image: 'https://c4.wallpaperflare.com/wallpaper/281/461/210/tattoo-snakes-tattoo-muscle-wallpaper-thumb.jpg' },
  { name: "Abedi Pele", position: "Financial Secretary", image: 'https://c4.wallpaperflare.com/wallpaper/281/461/210/tattoo-snakes-tattoo-muscle-wallpaper-thumb.jpg' },
  { name: "Ama Ata Aidoo", position: "Financial Secretary", image: 'https://c4.wallpaperflare.com/wallpaper/281/461/210/tattoo-snakes-tattoo-muscle-wallpaper-thumb.jpg' },
  { name: "Samia Nkrumah", position: "PRO", image: 'https://c4.wallpaperflare.com/wallpaper/281/461/210/tattoo-snakes-tattoo-muscle-wallpaper-thumb.jpg' },
  { name: "J.E.A. Mills", position: "President", image: 'https://c4.wallpaperflare.com/wallpaper/281/461/210/tattoo-snakes-tattoo-muscle-wallpaper-thumb.jpg' },
  { name: "Asamoah Gyan", position: "Financial Secretary", image: 'https://c4.wallpaperflare.com/wallpaper/281/461/210/tattoo-snakes-tattoo-muscle-wallpaper-thumb.jpg' },
  { name: "Kwame Ture", position: "Secretary", image: 'https://c4.wallpaperflare.com/wallpaper/281/461/210/tattoo-snakes-tattoo-muscle-wallpaper-thumb.jpg' },
  { name: "Highest Yosh", position: "PRO", image: 'https://c4.wallpaperflare.com/wallpaper/281/461/210/tattoo-snakes-tattoo-muscle-wallpaper-thumb.jpg' },
];

const positions = ["President", "Secretary", "Financial Secretary", "PRO"];

const LiveVotesCount = () => {
  const [votes, setVotes] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating live data fetching
    const fetchVotes = () => {
      // This should be replaced with actual API call
      const fakeData = {
        "Kwame Nkrumah": 120,
        "Yaa Asantewaa": 95,
        "Kofi Annan": 140,
        "Efua Sutherland": 80,
        "Abedi Pele": 65,
        "Ama Ata Aidoo": 70,
        "Samia Nkrumah": 55,
        "J.E.A. Mills": 110,
        "Asamoah Gyan": 50,
        "Kwame Ture": 85,
        "Highest Yosh": 90,
      };
      setVotes(fakeData);
      setLoading(false);
    };

    //REAL LIFE API
    // useEffect(() => {
    //   const fetchVotes = async () => {
    //     try {
    //       const response = await fetch('https://api.example.com/votes'); // Replace with your API endpoint
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       const data = await response.json();
    //       setVotes(data);
    //     } catch (error) {
    //       console.error('Failed to fetch votes:', error);
    //     }
    //   };

    //   const intervalId = setInterval(fetchVotes, 2000); // Fetch votes every 2 seconds

    //   // Fetch votes immediately on mount
    //   fetchVotes();

    //   return () => clearInterval(intervalId); // Cleanup interval on unmount
    // }, []);

    const intervalId = setInterval(fetchVotes, 4000); // Fetch votes every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  const calculateTotalVotesForPosition = (position) => {
    return candidates
      .filter((candidate) => candidate.position === position)
      .reduce((sum, candidate) => sum + (votes[candidate.name] || 0), 0);
  };

  const calculatePercentage = (candidateVotes, totalVotesForPosition) => {
    return ((candidateVotes / totalVotesForPosition) * 100).toFixed(2);
  };

  const renderCandidates = (position) => {
    const totalVotesForPosition = calculateTotalVotesForPosition(position);
    return (
      <div className="mb-8">
        <div className="bg-blue-500 text-white text-center py-2 mb-4">
          <h2 className="text-2xl font-bold">{position}</h2>
          <p>
            Total Votes for {position}: {totalVotesForPosition}
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {candidates
            .filter((candidate) => candidate.position === position)
            .map((candidate) =>
              loading ? (
                <div
                  key={candidate.name}
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow m-2 p-4"
                >
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="w-32 h-32 mb-3 rounded-full bg-gray-300"></div>
                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="mt-4 w-full">
                      <div className="h-6 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={candidate.name}
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow m-2 p-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 mb-3 rounded-full bg-gray-300 flex items-center justify-center">
                      <img
                        src={candidate.image}
                        alt={candidate.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h5 className="mb-1 text-xl font-medium text-gray-900">
                      {candidate.name}
                    </h5>
                    <span className="text-sm text-gray-500">
                      {candidate.position}
                    </span>
                    <div className="mt-4">
                      <p className="text-lg font-bold text-blue-500">
                        {votes[candidate.name] || 0} votes
                      </p>
                      <p className="text-sm text-black ml-4">
                        {totalVotesForPosition > 0
                          ? calculatePercentage(
                              votes[candidate.name] || 0,
                              totalVotesForPosition
                            )
                          : 0}
                        %
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    );
  };

  return (
    <div
      className="container mx-auto p-4 min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <nav className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="bg-white text-blue-500 px-4 py-2 rounded"
        >
          Back
        </button>
        <h1 className="text-2xl font-bold">Live Votes Count</h1>
      </nav>
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold text-blue-500">
          Total Votes Casted:{" "}
          {Object.values(votes).reduce((sum, voteCount) => sum + voteCount, 0)}
        </h2>
      </div>
      {positions.map((position) => (
        <div key={position}>{renderCandidates(position)}</div>
      ))}
    </div>
  );
};

export default LiveVotesCount;
