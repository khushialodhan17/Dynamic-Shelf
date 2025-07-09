import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{HeaderCSS}</style>
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <a href="#" className="logo">
              {/* SVG for a simple shopping cart icon */}
              <svg className="logo-icon" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M17.218 2.071l-4.75 10.024H3.626L.876 2.071h16.342zm-1.07 1.954H2.981L4.85 11.04h9.553l2.745-5.015zM22 20.999c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm-10 0c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm-1.75-10.999l-2.001 4.001H18c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H9.5c-.38 0-.73-.2-.92-.53l-2.75-5.001H2c-.552 0-1-.448-1-1s.448-1 1-1h4.25c.38 0 .73.2.92.53l2.75 5.001z"/>
              </svg>
             Dynamic Shelf
            </a>
            <span className="tagline">Quality Products</span>
          </div>

          {/* Hamburger/Cross Button for Mobile */}
          <button className="hamburger-button" onClick={toggleMenu}>
            {isMenuOpen ? (
              // Cross icon (X)
              <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            ) : (
              // Hamburger icon
              <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            )}
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="nav-menu">
            <ul>
              <li><a href="#home" onClick={closeMenu}>HOME</a></li>
              <li><a href="#about" onClick={closeMenu}>ABOUT</a></li>
              <li><a href="#services" onClick={closeMenu}>SERVICES</a></li>
              <li><a href="#team" onClick={closeMenu}>TEAM</a></li>
              <li><a href="#category" onClick={closeMenu}>CATEGORY</a></li>
              <li><a href="#contact" onClick={closeMenu}>CONTACT US</a></li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={closeMenu}>HOME</a></li>
            <li><a href="#about" onClick={closeMenu}>ABOUT</a></li>
            <li><a href="#services" onClick={closeMenu}>SERVICES</a></li>
            <li><a href="#team" onClick={closeMenu}>TEAM</a></li>
            <li><a href="#category" onClick={closeMenu}>CATEGORY</a></li>
            <li><a href="#contact" onClick={closeMenu}>CONTACT US</a></li>
          </ul>
        </div>
      </header>
    </>
  );
};


const HeaderCSS = `
  .header {
    background-color: #388E3C; /* Darker grocery green */
    color: white;
    padding: 15px 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Slightly stronger shadow for navbar */
    position: sticky; /* Make navbar sticky */
    top: 0; /* Stick to the top of the viewport */
    z-index: 1000; /* Ensure it stays on top of other content */
    width: 100%; /* Ensure it spans full width when sticky */
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .logo {
    font-size: 28px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); /* Enhanced shadow for logo text */
    transition: text-shadow 0.3s ease;
  }

  .logo:hover {
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6); /* More prominent shadow on hover */
  }

  .logo-icon {
    margin-right: 8px;
    font-size: 32px;
  }

  .tagline {
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 2px;
  }

  /* Desktop Navigation */
  .nav-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex; /* Always flex for desktop */
  }

  .nav-menu li {
    margin-left: 30px;
  }

  .nav-menu a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    padding: 5px 0;
    position: relative;
    transition: color 0.3s ease, text-shadow 0.3s ease;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  }

  .nav-menu a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #FFD700;
    transition: width 0.3s ease;
  }

  .nav-menu a:hover {
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
  }

  .nav-menu a:hover::after {
    width: 100%;
  }

  /* Hamburger Menu Button */
  .hamburger-button {
    display: none; /* Hidden by default on desktop */
    background: none;
    border: none;
    font-size: 30px;
    color: white;
    cursor: pointer;
    z-index: 1001; /* Ensure it's above the header */
    padding: 5px;
  }

  /* Mobile Menu Overlay */
  .mobile-menu-overlay {
    display: none; /* Hidden by default */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(56, 142, 60, 0.9); /* Greenish transparent */
    z-index: 999; /* Below hamburger but above content */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
    opacity: 0;
    pointer-events: none; /* Prevent interaction when hidden */
  }

  .mobile-menu-overlay.open {
    display: flex; /* Show when open */
    opacity: 1;
    pointer-events: auto; /* Allow interaction when open */
  }

  .mobile-menu-overlay ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  .mobile-menu-overlay li {
    margin: 20px 0;
  }

  .mobile-menu-overlay a {
    color: white;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    transition: color 0.3s ease, text-shadow 0.3s ease;
  }

  .mobile-menu-overlay a:hover {
    color: #FFD700; /* Yellow on hover */
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
  }

  /* Responsive adjustments for Header */
  @media (max-width: 768px) {
    .header-content {
      flex-direction: row; /* Keep logo and hamburger side-by-side */
      justify-content: space-between; /* Space between logo and hamburger */
      align-items: center;
      padding: 0 10px; /* Reduced horizontal padding for mobile to bring icon closer to edge */
    }

    .nav-menu ul {
      display: none; /* Hide desktop nav on small screens */
    }

    .hamburger-button {
      display: block; /* Show hamburger button */
    }

    .logo-container {
      margin-bottom: 0; /* Remove bottom margin when not stacked */
    }
  }

  @media (max-width: 576px) {
    .header {
      padding: 10px 0; /* Reduce header padding on very small screens */
    }
    .logo {
      font-size: 24px; /* Smaller logo on very small screens */
    }
    .logo-icon {
      font-size: 28px;
    }
    .tagline {
      font-size: 12px;
    }
  }
`;

export default Header
