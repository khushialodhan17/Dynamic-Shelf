import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchUsdToInrRate, usdToInr } from '../utils/currency';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [products, setProducts] = useState([]);
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  document.body.style.backgroundColor = '#1a1c24';

  return () => {
    document.body.style.backgroundColor = ''; 
  };
}, []);

  useEffect(() => {
    fetchUsdToInrRate()
      .then(setRate)
      .catch(() => setRate(83.25)); 

    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://flexshelf-backend.onrender.com/search-products'
          , {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query })
        });
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setProducts([]);
      }
      setLoading(false);
    };

    if (query) {
      fetchProducts();
    }
  }, [query]);

  return (
    <div style={{ backgroundColor: '#1a1c24', minHeight: '100vh', padding: '20px', color: 'white' }}>
      <h1>Search Results for "<span style={{ color: 'yellow' }}>{query}</span>"</h1>

      {loading && <p>Loading...</p>}
      {!loading && products.length === 0 && <p>No products found.</p>}

      <div className="product-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px',
        marginTop: '30px'
      }}>
        {products.map(product => (
          <div key={product.product_id} className="product-card" style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '12px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <img
              src={product.Image_URL}
              alt={product.Product_Name}
              style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3>{product.Product_Name}</h3>
            <p><strong>Category:</strong> {product.Catagory}</p>
            <p>
              <strong>Actual Price:</strong>{' '}
            {rate == null
            ? '…'
            : `₹${usdToInr(Number(product.Unit_Price?.replace('$', '')), rate).toLocaleString('en-IN')}`}
            </p>
            <p>
              <strong>Predicted Price:</strong>{' '}
              {rate == null ? '…' : `₹${usdToInr(product.Predicted_Discounted_Price, rate).toLocaleString('en-IN')}`}
            </p>
            <p><strong>Expiry:</strong> {product.Expiration_Date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;