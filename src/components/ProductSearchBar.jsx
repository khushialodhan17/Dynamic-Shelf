import React, { useState } from 'react';
const ProductSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
        <h1 className="search-title">
          Product Search
        </h1>
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Search for products (e.g., Milk, Bread)"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
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
          You are currently searching for: <span className="search-term-highlight">{searchTerm || '.........'}</span>
        </p>
      </div>

      <style>
        {`
          /* Import Inter font */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

          .search-bar-wrapper {
            min-height: 50vh; /* Full viewport height */
            background-color: #f3f4f6; /* Equivalent to bg-gray-100 */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1rem; /* Equivalent to p-4 */
            font-family: 'Inter', sans-serif; /* Apply Inter font */
          }

          .search-bar-container {
            width: 100%;
            max-width: 42rem; 
            background-color: white; 
            border-radius: 0.5rem; 
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
            padding: 1.5rem; 
          }
          @media (min-width: 768px) { /* md: breakpoint */
            .search-bar-container {
              padding: 2rem; /* Equivalent to md:p-8 */
            }
          }

          .search-title {
            font-size: 2.25rem; /* Equivalent to text-3xl */
            font-weight: 800; /* Equivalent to font-extrabold */
            color: #1f2937; /* Equivalent to text-gray-800 */
            margin-bottom: 1.5rem; /* Equivalent to mb-6 */
            text-align: center;
          }
          @media (min-width: 768px) { /* md: breakpoint */
            .search-title {
              font-size: 2.5rem; /* Equivalent to md:text-4xl */
            }
          }

          .search-input-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem; /* Equivalent to space-y-4 sm:space-x-4 */
          }
          @media (min-width: 640px) { /* sm: breakpoint */
            .search-input-group {
              flex-direction: row;
              gap: 1rem; /* Equivalent to sm:space-x-4 */
            }
          }

          .search-input {
            flex-grow: 1; /* Equivalent to flex-grow */
            width: 100%; /* Equivalent to w-full */
            padding: 0.75rem 1.25rem; /* Equivalent to px-5 py-3 */
            border: 1px solid #d1d5db; /* Equivalent to border border-gray-300 */
            border-radius: 0.75rem; /* Equivalent to rounded-xl */
            outline: none;
            color: #374151; /* Equivalent to text-gray-700 */
            font-size: 1.125rem; /* Equivalent to text-lg */
            transition: all 0.2s ease-in-out; /* Equivalent to transition duration-200 ease-in-out */
          }
          .search-input:focus {
            box-shadow: 0 0 0 2px rgba(52, 211, 153, 0.5); /* Equivalent to focus:ring-2 focus:ring-green-500 */
            border-color: transparent; /* Equivalent to focus:border-transparent */
          }
          .search-input:hover {
            transform: scale(1.05); /* Equivalent to transform hover:scale-105 */
          }

          .search-button {
            width: 100%; /* Equivalent to w-full */
            background-color: #16a34a; /* Equivalent to bg-green-600 */
            color: #ffffff; /* Equivalent to text-white */
            font-weight: 600; /* Equivalent to font-semibold */
            padding: 0.75rem 1.5rem; /* Equivalent to py-3 px-6 */
            border-radius: 0.75rem; /* Equivalent to rounded-xl */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* Equivalent to shadow-md */
            transition: all 0.3s ease-in-out; /* Equivalent to transition duration-300 ease-in-out */
            cursor: pointer;
            border: none;
          }
          @media (min-width: 640px) { /* sm: breakpoint */
            .search-button {
              width: auto; /* Equivalent to sm:w-auto */
            }
          }
          .search-button:hover {
            background-color: #15803d; /* Equivalent to hover:bg-green-700 */
            transform: scale(1.05); /* Equivalent to transform hover:scale-105 */
          }
          .search-button:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(52, 211, 153, 0.75); /* Equivalent to focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 */
          }

          .search-term-display {
            margin-top: 1.5rem; /* Equivalent to mt-6 */
            text-align: center;
            color: #4b5563; /* Equivalent to text-gray-600 */
            font-size: 1rem; /* Equivalent to text-md */
          }

          .search-term-highlight {
            font-weight: 700; /* Equivalent to font-bold */
            color: #16a34a; /* Equivalent to text-green-600 */
          }
        `}
      </style>
    </div>
  );
};

export default ProductSearchBar;