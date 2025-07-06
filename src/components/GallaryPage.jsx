import React, { useEffect, useState } from 'react'

const GallaryPage = () => {
 const [activeFilter, setActiveFilter] = useState('All');
  // State to hold product data, initially empty
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Dummy product data (this would come from your backend/ML model)
  const dummyProductData = [
    // Dairy Products
    { id: 1, category: 'Dairy', src: "https://placehold.co/400x200/ADD8E6/000000?text=Milk", caption: "Fresh Milk", price: "$3.49", status: "New" },
    { id: 2, category: 'Dairy', src: "https://placehold.co/400x200/ADD8E6/000000?text=Cheese", caption: "Cheddar Cheese", price: "$7.99", status: "Discounted" },
    { id: 3, category: 'Dairy', src: "https://placehold.co/400x200/ADD8E6/000000?text=Yogurt", caption: "Creamy Yogurt", price: "$2.29", status: "" },
    { id: 4, category: 'Dairy', src: "https://placehold.co/400x200/ADD8E6/000000?text=Butter", caption: "Farm Butter", price: "$4.99", status: "Will be discounted in 2 days" },

    // Grocery Products
    { id: 5, category: 'Grocery', src: "https://placehold.co/400x200/F0E68C/333333?text=Rice", caption: "Basmati Rice", price: "$12.50", status: "New" },
    { id: 6, category: 'Grocery', src: "https://placehold.co/400x200/F0E68C/333333?text=Pasta", caption: "Durum Wheat Pasta", price: "$2.99", status: "" },
    { id: 7, category: 'Grocery', src: "https://placehold.co/400x200/F0E68C/333333?text=Coffee", caption: "Premium Coffee Beans", price: "$9.99", status: "Discounted" },
    { id: 8, category: 'Grocery', src: "https://placehold.co/400x200/F0E68C/333333?text=Cereal", caption: "Breakfast Cereal", price: "$4.75", status: "New" },

    // Vegetables & Fruits Products
    { id: 9, category: 'Vegetables & Fruits', src: "https://placehold.co/400x200/8BC34A/388E3C?text=Apples", caption: "Crisp Red Apples", price: "$1.99/lb", status: "Will be discounted in 2 days" },
    { id: 10, category: 'Vegetables & Fruits', src: "https://placehold.co/400x200/8BC34A/388E3C?text=Broccoli", caption: "Fresh Broccoli", price: "$2.50", status: "" },
    { id: 11, category: 'Vegetables & Fruits', src: "https://placehold.co/400x200/8BC34A/388E3C?text=Oranges", caption: "Juicy Oranges", price: "$0.79/ea", status: "New" },
    { id: 12, category: 'Vegetables & Fruits', src: "https://placehold.co/400x200/8BC34A/388E3C?text=Spinach", caption: "Organic Spinach", price: "$3.00", status: "Discounted" },

    // Bakery Products
    { id: 13, category: 'Bakery', src: "https://placehold.co/400x200/D2B48C/333333?text=Bread", caption: "Artisan Bread", price: "$4.25", status: "New" },
    { id: 14, category: 'Bakery', src: "https://placehold.co/400x200/D2B48C/333333?text=Croissant", caption: "Flaky Croissant", price: "$1.50", status: "" },
    { id: 15, category: 'Bakery', src: "https://placehold.co/400x200/D2B48C/333333?text=Cake", caption: "Chocolate Cake", price: "$18.00", status: "Will be discounted in 2 days" },
    { id: 16, category: 'Bakery', src: "https://placehold.co/400x200/D2B48C/333333?text=Cookies", caption: "Assorted Cookies", price: "$5.99", status: "Discounted" },
  ];

  // This useEffect simulates fetching data from a backend
  useEffect(() => {
    // In a real application, you would make a fetch call here:
    // fetch('/api/products')
    //   .then(response => response.json())
    //   .then(data => {
    //     setProducts(data);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     console.error("Error fetching products:", error);
    //     setLoading(false);
    //   });

    // For now, we simulate a delay and then set the dummy data
    const timer = setTimeout(() => {
      setProducts(dummyProductData);
      setLoading(false);
    }, 500); // Simulate network delay

    return () => clearTimeout(timer); // Cleanup timer
  }, []); // Empty dependency array means this runs once on mount

  // Dummy function to simulate an ML model updating prices/statuses
  // In a real scenario, your backend would push updates, or you'd re-fetch data.
  const simulatePriceUpdate = () => {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id === 1) { // Example: Update Milk
          return { ...product, price: "$2.99", status: "Discounted" };
        }
        if (product.id === 14) { // Example: Update Croissant
          return { ...product, price: "$1.00", status: "Discounted" };
        }
        if (product.id === 11) { // Example: Oranges become 'Will be discounted'
            return { ...product, status: "Will be discounted in 2 days" };
        }
        if (product.id === 5) { // Example: Rice becomes normal after 'New'
            return { ...product, status: "" };
        }
        return product;
      })
    );
    console.log("Simulating price/status update for some products.");
  };

  // Filter products based on activeFilter state
  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter(product => product.category === activeFilter);

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
          <button
            className={`filter-button ${activeFilter === 'Dairy' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Dairy')}
          >
            Dairy
          </button>
          <button
            className={`filter-button ${activeFilter === 'Grocery' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Grocery')}
          >
            Grocery
          </button>
          <button
            className={`filter-button ${activeFilter === 'Vegetables & Fruits' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Vegetables & Fruits')}
          >
            Vegetables & Fruits
          </button>
          <button
            className={`filter-button ${activeFilter === 'Bakery' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Bakery')}
          >
            Bakery
          </button>
          {/* Dummy button to trigger a simulated price update */}
          <button
            className="filter-button"
            onClick={simulatePriceUpdate}
            style={{ backgroundColor: '#FFB300', color: '#333' }}
          >
            Simulate ML Update
          </button>
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
                {/* Dynamic Status Button */}
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
}

export default GallaryPage

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