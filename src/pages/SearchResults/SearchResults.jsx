// SearchResults.jsx
import React from 'react';
import './SearchResults.css';

const SearchResults = ({ searchQuery, homeData }) => {
  const filteredResults = homeData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-results-container">
      <h2>Search Results for: "{searchQuery}"</h2>
      <div className="video-grid">
        {filteredResults.length > 0 ? (
          filteredResults.map((video) => (
            <div key={video.id} className="video-card">
              <img src={video.thumbnail} alt={video.title} />
              <p>{video.title}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
