import React, { useState, useEffect } from 'react';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [currentShow, setCurrentShow] = useState(0);

  const featuredShows = [
    {
      title: "Stranger Things",
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      year: "2024",
      rating: "TV-14",
      genres: ["Sci-Fi", "Drama", "Horror"],
    },
    {
      title: "The Crown",
      description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
      image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      year: "2024",
      rating: "TV-MA",
      genres: ["Drama", "Biography", "History"],
    },
    {
      title: "Dark",
      description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
      image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      year: "2024",
      rating: "TV-MA",
      genres: ["Sci-Fi", "Thriller", "Drama"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShow((prev) => (prev + 1) % featuredShows.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentFeature = featuredShows[currentShow];

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${currentFeature.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4 md:px-12">
        <div className="max-w-2xl space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {currentFeature.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-sm md:text-base">
            <span className="bg-red-600 px-2 py-1 rounded text-xs font-semibold">
              {currentFeature.rating}
            </span>
            <span>{currentFeature.year}</span>
            <div className="flex space-x-2">
              {currentFeature.genres.map((genre, index) => (
                <span key={index} className="text-gray-300">
                  {genre}{index < currentFeature.genres.length - 1 && ' •'}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm md:text-lg max-w-xl leading-relaxed text-gray-200">
            {currentFeature.description}
          </p>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded hover:bg-gray-200 transition-colors font-semibold">
              <Play className="w-5 h-5 fill-current" />
              <span>Play</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-gray-600/80 text-white px-6 md:px-8 py-2 md:py-3 rounded hover:bg-gray-600 transition-colors font-semibold">
              <Info className="w-5 h-5" />
              <span>More Info</span>
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="ml-auto p-3 border-2 border-gray-400 rounded-full hover:border-white transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Show Indicators */}
      <div className="absolute bottom-8 right-4 md:right-12 flex space-x-2">
        {featuredShows.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentShow(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentShow ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;