import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

interface Content {
  id: string;
  title: string;
  image: string;
  year: string;
  rating: string;
  duration: string;
  genres: string[];
  description: string;
}

interface ContentCardProps {
  content: Content;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="min-w-[160px] md:min-w-[240px] lg:min-w-[280px] cursor-pointer transform transition-all duration-300 hover:scale-110 hover:z-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={content.image}
          alt={content.title}
          className="w-full h-[90px] md:h-[135px] lg:h-[158px] object-cover rounded-md"
        />
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute -top-8 left-0 right-0 bg-gray-900 rounded-md shadow-2xl border border-gray-700 p-4 z-30 min-w-[300px]">
            <img
              src={content.image}
              alt={content.title}
              className="w-full h-[169px] object-cover rounded-md mb-3"
            />
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors">
                    <Play className="w-4 h-4 text-black fill-current" />
                  </button>
                  <button className="p-2 border-2 border-gray-500 rounded-full hover:border-white transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                  <button className="p-2 border-2 border-gray-500 rounded-full hover:border-white transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                </div>
                <button className="p-2 border-2 border-gray-500 rounded-full hover:border-white transition-colors">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <span className="text-green-500 font-semibold">98% Match</span>
                <span className="border border-gray-500 px-1 text-xs">{content.rating}</span>
                <span>{content.duration}</span>
              </div>

              <div className="flex flex-wrap gap-1">
                {content.genres.slice(0, 3).map((genre, index) => (
                  <span key={index} className="text-gray-300 text-xs">
                    {genre}{index < Math.min(content.genres.length - 1, 2) && ' •'}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Basic Info (always visible) */}
      <div className="mt-2 px-1">
        <h3 className="text-sm font-medium text-white truncate">{content.title}</h3>
        <p className="text-xs text-gray-400">{content.year}</p>
      </div>
    </div>
  );
};

export default ContentCard;