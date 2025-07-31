import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';
import SearchModal from './components/SearchModal';
import { movieCategories, tvShowCategories, documentaryCategories, kidsCategories, trendingContent } from './data/content';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('home');

  const renderContent = () => {
    switch (selectedCategory) {
      case 'movies':
        return (
          <div className="space-y-8">
            {movieCategories.map((category, index) => (
              <ContentRow key={index} title={category.name} content={category.items} />
            ))}
          </div>
        );
      case 'tv':
        return (
          <div className="space-y-8">
            {tvShowCategories.map((category, index) => (
              <ContentRow key={index} title={category.name} content={category.items} />
            ))}
          </div>
        );
      case 'documentaries':
        return (
          <div className="space-y-8">
            {documentaryCategories.map((category, index) => (
              <ContentRow key={index} title={category.name} content={category.items} />
            ))}
          </div>
        );
      case 'kids':
        return (
          <div className="space-y-8">
            {kidsCategories.map((category, index) => (
              <ContentRow key={index} title={category.name} content={category.items} />
            ))}
          </div>
        );
      default:
        return (
          <div className="space-y-8">
            <ContentRow title="Trending Now" content={trendingContent} />
            <ContentRow title="Popular Movies" content={movieCategories[0].items} />
            <ContentRow title="Top TV Shows" content={tvShowCategories[0].items} />
            <ContentRow title="New Releases" content={movieCategories[1].items} />
            <ContentRow title="Netflix Originals" content={tvShowCategories[1].items} />
            <ContentRow title="Watch Again" content={movieCategories[2].items} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        onSearchClick={() => setIsSearchOpen(true)}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      {selectedCategory === 'home' && <Hero />}
      
      <main className="px-4 md:px-12 pb-20">
        {renderContent()}
      </main>

      {isSearchOpen && (
        <SearchModal onClose={() => setIsSearchOpen(false)} />
      )}
    </div>
  );
}

export default App;