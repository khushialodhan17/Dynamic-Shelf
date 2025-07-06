import React, { useState } from 'react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Let's assume 3 slides for the carousel effect

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Placeholder image for fruits - you can replace this with your actual image URL
  const fruitsImage = "https://placehold.co/600x400/green/ffffff?text=Fresh+Fare";

  return (
    <>
      <style>{HeroSectionCSS}</style>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-image-container">
            <img
              src={fruitsImage}
              alt="Assorted Fresh Fruits"
              className="hero-image"
              // Fallback for image loading errors
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found"; }}
            />
          </div>
          <div className="hero-text-content">
            <h1 className="hero-title">We Have Wide Range Of Products</h1>
            <p className="hero-subtitle">Fresh Fruits From Our Grocery Store</p>
            <button className="read-more-button">
              READ MORE
              <span style={{ marginLeft: '5px' }}>&rarr;</span> {/* Right arrow */}
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="arrow-button left" onClick={handlePrev}>
          &lt;
        </button>
        <button className="arrow-button right" onClick={handleNext}>
          &gt;
        </button>

        {/* Pagination Dots */}
        <div className="pagination-dots">
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </section>
    </>
  );
};

// Hero Section Component CSS - No changes, keeping previous enhancements
const HeroSectionCSS = `
  .hero-section {
    background-color: #FFFFFF; /* White background for hero section */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    position: relative;
    overflow: hidden;
    min-height: 600px; /* Ensure a minimum height */
  }

  .hero-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 1200px;
    gap: 40px; /* Space between image and text */
  }

  .hero-image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px; /* Minimum width for image container */
  }

  .hero-image {
    max-width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .hero-text-content {
    flex: 1;
    text-align: left;
    color: #388E3C; /* Darker grocery green text for contrast on white */
    min-width: 300px; /* Minimum width for text content */
  }

  .hero-title {
    font-size: 52px;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 1.2;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2); /* Enhanced subtle shadow for hero title */
  }

  .hero-subtitle {
    font-size: 24px; /* Increased font size */
    font-weight: 600; /* Increased font weight */
    margin-bottom: 30px;
    color: #FFD700; /* Vibrant yellow color */
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3); /* More pronounced shadow for subtitle */
    animation: pulse 2s infinite alternate; /* Added a subtle pulse animation */
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    }
    100% {
      transform: scale(1.02);
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    }
  }

  .read-more-button {
    background-color: #8BC34A; /* Lighter grocery green background */
    color: white; /* White text for contrast */
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .read-more-button:hover {
    background-color: #689F38; /* Darker green on hover */
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }

  .read-more-button:active {
    transform: translateY(0);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }

  .arrow-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #FFD700; /* Vibrant yellow */
    border: none;
    color: #388E3C; /* Dark green text */
    font-size: 30px;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease, color 0.3s ease;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3); /* Enhanced shadow for arrow button */
  }

  .arrow-button:hover {
    background: #FFC107; /* Slightly darker yellow on hover */
    color: #2C6B2F; /* Slightly darker green for text on hover */
    transform: translateY(-50%) scale(1.08); /* Slightly more pronounced scale on hover */
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.4); /* More prominent shadow on hover */
  }

  .arrow-button.left {
    left: 20px;
  }

  .arrow-button.right {
    right: 20px;
  }

  .pagination-dots {
    position: absolute;
    bottom: 30px;
    display: flex;
    gap: 10px;
  }

  .dot {
    width: 12px;
    height: 12px;
    background-color: rgba(0, 0, 0, 0.3); /* Darker dots for contrast on white */
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  .dot.active {
    background-color: #388E3C; /* Active dot is dark green */
    transform: scale(1.2);
  }

  /* Responsive adjustments for Hero Section */
  @media (max-width: 992px) {
    .hero-content {
      flex-direction: column;
      text-align: center;
      gap: 30px;
    }

    .hero-image-container {
      order: 2; /* Image below text on smaller screens */
    }

    .hero-text-content {
      order: 1; /* Text above image on smaller screens */
      text-align: center;
    }

    .hero-title {
      font-size: 42px;
    }

    .hero-subtitle {
      font-size: 18px;
    }

    .arrow-button {
      font-size: 24px;
      width: 40px;
      height: 40px;
    }

    .arrow-button.left {
      left: 10px;
    }

    .arrow-button.right {
      right: 10px;
    }
  }

  @media (max-width: 576px) {
    .hero-section {
      padding: 60px 10px;
      min-height: 500px;
    }

    .hero-title {
      font-size: 32px;
    }

    .hero-subtitle {
      font-size: 16px;
    }

    .read-more-button {
      padding: 12px 25px;
      font-size: 16px;
    }
  }
`;

export default HeroSection
