import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { allContent } from '../data/content';

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContent, setFilteredContent] = useState(allContent);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredContent(allContent);
    } else {
      const filtered = allContent.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.genres.some(genre => genre.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredContent(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen">
        {/* Search Header */}
        <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 p-4">
          <div className="max-w-4xl mx-auto flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search titles, genres..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-md border border-gray-700 focus:border-red-500 focus:outline-none"
              />
            </div>
            <button
              onClick={onClose}
              className="p-3 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-w-4xl mx-auto p-4">
          {searchTerm && (
            <p className="text-gray-400 mb-6">
              {filteredContent.length} results for "{searchTerm}"
            </p>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer group transform transition-transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[200px] md:h-[240px] object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-xs">{item.year} • {item.rating}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="text-white text-sm font-medium truncate">{item.title}</h3>
                  <p className="text-gray-400 text-xs">{item.year}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredContent.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No results found for "{searchTerm}"</p>
              <p className="text-gray-500 text-sm mt-2">Try different keywords or check your spelling</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;