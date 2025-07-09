import React, { useEffect, useState } from 'react';

const GallaryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryOrder = [
    'Grains & Pulses',
  'Beverages',
  'Fruits & Vegetables',
  'Oils & Fats',
  'Bakery',
  'Dairy',
  'Seafood',
  ];

  // Fetch products from Flask backend
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: activeFilter === 'All' ? '' : activeFilter }),
      });

      const data = await response.json();

      if (response.ok) {

      const updated = await Promise.all(
       data.results.map(async (item, idx) => ({
        id: idx + 1,
        category: item.catagory,
        caption: item.product_name,
        price: `$${item.predicted_price.toFixed(2)}`,
        status: simulateStatus(item),
        src: await generateImage(item.product_name, item.catagory),
  }))
);
        setProducts(updated);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching data from backend:", error);
      setProducts([]);
    }
    setLoading(false);
  };

const generateImage = async (productName, category) => {
  try {
    const response = await fetch(
      `https://${import.meta.env.VITE_RAPID_API_HOST}/images/search?q=${encodeURIComponent(productName)}&count=1`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
          'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
        }
      }
    );

    const data = await response.json();
    const imageUrl = data?.value?.[0]?.contentUrl;

    if (imageUrl) {
      console.log(`✅ Image found for ${productName}`);
      return imageUrl;
    }
  } catch (err) {
    console.warn(`Image API failed for ${productName}:`, err.message);
  }

  // Fallback if API fails
  const fallbackColorMap = {
    'Dairy': 'ADD8E6',
    'Bakery': 'D2B48C',
    'Fruits & Vegetables': '8BC34A',
    'Grains & Pulses': 'DEB887',
    'Beverages': '87CEFA',
    'Oils & Fats': 'FFD700',
    'Seafood': '4682B4'
  };

  const color = fallbackColorMap[category] || 'cccccc';
  console.log(`🟡 Using fallback image for ${productName}`);
  return `https://placehold.co/400x200/${color}/333333?text=${encodeURIComponent(productName)}`;
};


  // Simulate status (in real case, status can come from backend too)
  const simulateStatus = (item) => {
    const p = parseFloat(item.predicted_price);
    const o = parseFloat(item.unit_price);
    const diff = o - p;
    if (diff > 5) return "Discounted";
    if (diff > 0) return "Will be discounted in 2 days";
    return "New";
  };

  useEffect(() => {
    fetchProducts();
  }, [activeFilter]);

  const filteredProducts = products; // Already filtered via backend

  if (loading) {
    return (
      <div className="gallery-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <h2 style={{ color: '#388E3C' }}>Loading FreshFare Products...</h2>
      </div>
    );
  }

  return (
    <>
      <style>{GalleryPageCSS}</style>
      <div className="gallery-page">
        <h1 className="gallery-title">FreshFare Products</h1>

        <div className="filter-buttons">
          <button
            className={`filter-button ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => setActiveFilter('All')}
          >
            All Products
          </button>
          {categoryOrder.map(cat => (
            <button
              key={cat}
              className={`filter-button ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div className="gallery-item" key={product.id}>
                <img
                  src={product.src}
                  alt={product.caption}
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/cccccc/333333?text=Image+Not+Found"; }}
                />
                {product.status && (
                  <button
                    className={`status-button ${
                      product.status === 'New' ? 'new' :
                      product.status === 'Discounted' ? 'discounted' :
                      product.status === 'Will be discounted in 2 days' ? 'will-be-discounted' : ''
                    }`}
                  >
                    {product.status}
                  </button>
                )}
                <div className="product-details">
                  <div className="image-caption">{product.caption}</div>
                  <div className="product-price">{product.price}</div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', color: '#555', fontSize: '1.2em' }}>No products found in this category.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default GallaryPage;

// Keep your existing GalleryPageCSS here
const GalleryPageCSS = `
  .gallery-page {
    padding: 40px 20px;
    text-align: center;
    background-color: #f0f2f5; /* Light background */
    min-height: calc(100vh - 80px); /* Adjust based on header/footer height */
  }

  .gallery-title {
    font-size: 48px;
    font-weight: 700;
    color: #388E3C; /* Dark grocery green */
    margin-bottom: 40px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  }

  .filter-buttons {
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap; /* Allow buttons to wrap */
    justify-content: center;
    gap: 15px; /* Space between buttons */
  }

  .filter-button {
    background-color: #333; /* Dark background for unselected buttons */
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .filter-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .filter-button.active {
    background-color: #FFD700; /* Yellow for active button */
    color: #388E3C; /* Dark green text for active button */
    font-weight: 700;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
    gap: 20px; /* Space between grid items */
    max-width: 1200px;
    margin: 0 auto;
  }

  .gallery-item {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative; /* Needed for absolute positioning of status button */
  }

  .gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  .gallery-item img {
    width: 100%;
    height: 200px; /* Fixed height for images */
    object-fit: cover; /* Cover the area, cropping if necessary */
    display: block;
    border-bottom: 1px solid #eee;
  }

  .product-details {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align text to the left */
  }

  .image-caption {
    font-weight: 600;
    color: #333;
    margin-bottom: 5px; /* Space between caption and price */
  }

  .product-price {
    font-size: 1.1em;
    font-weight: 700;
    color: #388E3C; /* Dark green for price */
    margin-bottom: 10px;
  }

  .status-button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.85em;
    font-weight: 600;
    color: white;
    border: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, transform 0.2s ease;
    z-index: 10; /* Ensure it's above the image */
  }

  .status-button.new {
    background-color: #8BC34A; /* Lighter green for New */
  }

  .status-button.discounted {
    background-color: #E74C3C; /* Red for Discounted */
  }

  .status-button.will-be-discounted {
    background-color: #F39C12; /* Orange for Will be discounted */
  }

  .status-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }

  /* Responsive adjustments for Gallery Page */
  @media (max-width: 768px) {
    .gallery-title {
      font-size: 38px;
      margin-bottom: 30px;
    }
    .filter-buttons {
      gap: 10px;
    }
    .filter-button {
      padding: 10px 20px;
      font-size: 14px;
    }
    .gallery-grid {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 15px;
    }
    .gallery-item img {
      height: 180px;
    }
    .product-details {
      padding: 10px;
    }
    .image-caption {
      font-size: 0.95em;
    }
    .product-price {
      font-size: 1em;
    }
    .status-button {
      font-size: 0.8em;
      padding: 4px 8px;
      top: 8px;
      right: 8px;
    }
  }

  @media (max-width: 576px) {
    .gallery-title {
      font-size: 32px;
      margin-bottom: 20px;
    }
    .filter-buttons {
      flex-direction: column; /* Stack buttons vertically on very small screens */
      align-items: center;
    }
    .filter-button {
      width: 80%; /* Make buttons wider when stacked */
      max-width: 250px;
    }
    .gallery-grid {
      grid-template-columns: 1fr; /* Single column on very small screens */
      padding: 0 10px;
    }
    .gallery-item img {
      height: 160px;
    }
    .product-details {
      padding: 8px;
    }
  }
`;