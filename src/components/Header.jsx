import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const handleLogoClick = (e) => {
    e.preventDefault(); 
    if (location.pathname !== "/") {
      navigate("/"); 
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeMenu();
  };

  const handleNavClick = (e, targetId) => {
  e.preventDefault();
  if (location.pathname !== "/") {
    navigate("/", { replace: true });

    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  } else {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  closeMenu();
};



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
            <a href="/" onClick={handleLogoClick} className="logo">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M17.218 2.071l-4.75 10.024H3.626L.876 2.071h16.342zm-1.07 1.954H2.981L4.85 11.04h9.553l2.745-5.015zM22 20.999c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm-10 0c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm-1.75-10.999l-2.001 4.001H18c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H9.5c-.38 0-.73-.2-.92-.53l-2.75-5.001H2c-.552 0-1-.448-1-1s.448-1 1-1h4.25c.38 0 .73.2.92.53l2.75 5.001z"/>
              </svg>
             FlexShelf
            </a>
            <span className="tagline">Flexible pricing based on freshness</span>
          </div>

          <button className="hamburger-button" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            )}
          </button>
          <nav className="nav-menu">
            <ul>

              <li><a href="#home" onClick={(e) => handleNavClick(e, "home")}>HOME</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, "about")}>ABOUT</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, "services")}>SERVICES</a></li>
              <li><a href="#team" onClick={(e) => handleNavClick(e, "team")}>TEAM</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>CONTACT US</a></li>

            </ul>
          </nav>
        </div>

        <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={(e) => handleNavClick(e, "home")}>HOME</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, "about")}>ABOUT</a></li>
            <li><a href="#services" onClick={(e) => handleNavClick(e, "services")}>SERVICES</a></li>
            <li><a href="#team" onClick={(e) => handleNavClick(e, "team")}>TEAM</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>CONTACT US</a></li>

          </ul>
        </div>
      </header>
    </>
  );
};

const HeaderCSS = `
.header {
  background-color: transparent;
  color: white;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  backdrop-filter: blur(6px);
  transition: background-color 0.3s ease;
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
  gap: 8px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  transition: text-shadow 0.3s ease;
}

.logo:hover {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
}

.logo-icon {
  font-size: 32px;
}

.tagline {
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 2px;
}

.nav-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-menu li {
  margin-left: 30px;
}

.nav-menu a {
  color: yellow;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  transition: color 0.3s ease;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: #FFD700;
  transition: width 0.3s ease;
}

.nav-menu a:hover {
  color: rgba(255, 255, 255, 0.8);
}

.nav-menu a:hover::after {
  width: 100%;
}

.hamburger-button {
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1001;
  padding: 5px;
}

.mobile-menu-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(26, 28, 36, 0.95);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 2000; /* Ensure it's above everything */
  padding: 0 20px;
  text-align: center;
}

.mobile-menu-overlay.open {
  display: flex;
  opacity: 1;
  pointer-events: auto;
}

.mobile-menu-overlay ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.mobile-menu-overlay li {
  margin: 20px 0;
}

.mobile-menu-overlay a {
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  padding: 10px 0;
  width: 100%;
  transition: color 0.3s ease;
}

.mobile-menu-overlay a:hover {
  color: #FFD700;
}


/* Responsive Adjustments */
@media (max-width: 992px) {
  .nav-menu ul {
    display: none;
  }
  .hamburger-button {
    display: block;
  }
}

@media (max-width: 576px) {
  .header {
    padding: 10px 0;
  }
  .logo {
    font-size: 24px;
  }
  .tagline {
    font-size: 12px;
  }
}
`;

export default Header
