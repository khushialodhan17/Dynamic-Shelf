import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'; 

const ProductSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    navigate(`/results?q=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
        

        <div className="search-input-group">
          <input
            type="text"
            placeholder="Search for products (e.g., SeaFood, Bread, Bakery)"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            aria-label="Product search input"
          />

          <button
            onClick={handleSearch}
            className="search-button"
            aria-label="Search button"
          >
            Search
          </button>
        </div>

        <p className="search-term-display">
          You are currently searching for:{' '}
          <span className="search-term-highlight">
            {searchTerm || '________'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductSearchBar;
