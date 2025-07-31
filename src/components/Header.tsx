import React, { useState, useEffect } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  onSearchClick: () => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick, selectedCategory, onCategoryChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'home', label: 'Home' },
    { id: 'movies', label: 'Movies' },
    { id: 'tv', label: 'TV Shows' },
    { id: 'documentaries', label: 'Documentaries' },
    { id: 'kids', label: 'Kids' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-red-600 text-2xl md:text-3xl font-bold">NETFLEX</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`text-sm font-medium transition-colors hover:text-gray-300 ${
                  selectedCategory === category.id ? 'text-white' : 'text-gray-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onSearchClick}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
          <nav className="px-4 py-4 space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 rounded transition-colors ${
                  selectedCategory === category.id 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;