import React, { useState } from 'react';

// CSS for the Footer Component - Flat Top, No Overlap
const FooterCSS = `
  .footer {
    background: linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%); /* Green gradient background */
    color: white;
    padding: 80px 20px 30px; /* Standard padding top */
    font-family: 'Inter', sans-serif;
    position: relative;
    overflow: hidden;
    /* Removed border-top-left-radius and border-top-right-radius */
    margin-top: 0; /* Removed negative margin to prevent overlap */
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.2); /* Adjusted shadow for flat top */
    z-index: 1; /* Ensure footer is above content it overlaps (if any other elements are positioned) */
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); /* Slightly larger min-width for columns */
    gap: 40px; /* Increased space between columns */
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15); /* Softer separator line */
  }

  .footer-column {
    text-align: left;
    padding: 20px; /* Padding inside each column for better spacing */
    background-color: rgba(255, 255, 255, 0.05); /* Very subtle transparent white background */
    border-radius: 12px; /* Rounded corners for columns */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Soft shadow for columns */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .footer-column:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .footer-column h3 {
    font-size: 22px; /* Slightly larger headings */
    font-weight: 700;
    margin-bottom: 25px; /* More space below headings */
    color: #FFC107; /* Golden yellow headings */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); /* Enhanced text shadow */
    letter-spacing: 0.5px; /* Slight letter spacing */
    position: relative;
  }

  .footer-column h3::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px; /* Position underline below text */
    width: 50px; /* Short underline */
    height: 3px;
    background-color: #FFC107; /* Yellow underline */
    border-radius: 2px;
  }

  .footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-column ul li {
    margin-bottom: 12px; /* More space between list items */
  }

  .footer-column ul li a {
    color: rgba(255, 255, 255, 0.85); /* Slightly brighter link color */
    text-decoration: none;
    font-size: 16px; /* Slightly larger font size for links */
    transition: color 0.3s ease, transform 0.2s ease;
    display: flex; /* For icon alignment */
    align-items: center;
    gap: 8px; /* Space between icon and text */
  }

  .footer-column ul li a:hover {
    color: #FFD700; /* Yellow on hover */
    transform: translateX(5px); /* Slide effect on hover */
  }

  .link-arrow-icon {
    font-size: 1em; /* Size relative to text */
    opacity: 0; /* Hidden by default */
    transition: opacity 0.3s ease;
  }

  .footer-column ul li a:hover .link-arrow-icon {
    opacity: 1; /* Show on hover */
  }

  .footer-brand {
    font-size: 38px; /* Larger brand name */
    font-weight: 800; /* Bolder brand name */
    color: white;
    margin-bottom: 25px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* More prominent shadow */
  }

  .email-bar-container {
    margin-top: 25px; /* More space above email bar */
  }

  .email-input-group {
    display: flex;
    margin-bottom: 15px; /* More space below input group */
    border-radius: 8px; /* Rounded input group */
    overflow: hidden; /* Ensures internal elements respect border-radius */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .email-input {
    flex-grow: 1;
    padding: 12px 15px 12px 45px; /* Increased padding, space for icon */
    border: none;
    font-size: 17px; /* Larger font size for input */
    outline: none;
    background-color: rgba(255, 255, 255, 0.95); /* Brighter input background */
    color: #333;
    position: relative;
  }

  .email-input-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    font-size: 20px;
    z-index: 1; /* Ensure icon is above input */
  }

  .email-submit-button {
    background-color: #FFC107; /* Golden yellow submit button */
    color: #2E7D32; /* Darker green text */
    border: none;
    padding: 12px 25px; /* Increased padding */
    font-size: 17px; /* Larger font size */
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  }

  .email-submit-button:hover {
    background-color: #FFD700; /* Brighter yellow on hover */
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }

  .email-message {
    font-size: 15px;
    margin-top: 10px; /* More space below input */
    min-height: 20px;
    font-weight: 500;
  }

  .social-media-icons {
    display: flex;
    gap: 20px; /* More space between icons */
    margin-top: 30px; /* More space above social icons */
  }

  .social-icon-link {
    color: white;
    font-size: 32px; /* Larger social icons */
    transition: color 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px; /* Make icons circular */
    height: 50px;
    border-radius: 50%; /* Circular background */
    background-color: rgba(255, 255, 255, 0.1); /* Subtle background */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .social-icon-link:hover {
    color: #FFC107; /* Golden yellow on hover */
    background-color: rgba(255, 255, 255, 0.2); /* Brighter background on hover */
    transform: translateY(-3px) rotate(5deg); /* More dynamic hover effect */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .footer-bottom {
    text-align: center;
    display: flex;
    padding:20px;
    font-size: 15px;
    color: #333; 
    border-top: 1px solid rgba(0, 0, 0, 0.1); 
    margin-top: 20px; 
    border-radius: 20px;
    justify-content: center;
    background-color: #F5F5F5; /* Light gray background */
    box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.05); /* Subtle inner shadow for depth */
  }

  /* Responsive adjustments for Footer */
  @media (max-width: 992px) {
    .footer {
      /* Removed border-top-left-radius and border-top-right-radius */
      margin-top: 0; /* Removed negative margin */
    }
  }

  @media (max-width: 768px) {
    .footer {
      padding: 60px 15px 20px;
      /* Removed border-top-left-radius and border-top-right-radius */
      margin-top: 0; /* Removed negative margin */
    }
    .footer-content {
      grid-template-columns: 1fr 1fr; /* Two columns on tablets */
      gap: 25px;
    }
    .footer-column {
      text-align: center; /* Center align columns on tablet */
      padding: 15px;
    }
    .footer-column h3 {
      font-size: 20px;
      margin-bottom: 15px;
    }
    .footer-column h3::after {
      left: 50%;
      transform: translateX(-50%); /* Center underline */
    }
    .footer-column ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .footer-brand {
      font-size: 32px;
    }
    .email-input-group {
      flex-direction: column; /* Stack input and button on small screens */
      border-radius: 8px; /* Full border-radius when stacked */
      box-shadow: none; /* Remove shadow when stacked */
    }
    .email-input, .email-submit-button {
      border-radius: 8px; /* Full border-radius when stacked */
      width: 100%;
      padding: 10px 15px; /* Adjust padding for stacked */
    }
    .email-input {
      padding-left: 15px; /* Remove icon padding when stacked */
    }
    .email-input-icon {
      display: none; /* Hide icon when stacked */
    }
    .email-submit-button {
      margin-top: 10px; /* Space between stacked input and button */
    }
    .social-media-icons {
      justify-content: center; /* Center social icons */
      margin-top: 20px;
      gap: 15px;
    }
    .social-icon-link {
      width: 45px;
      height: 45px;
      font-size: 26px;
    }
  }

  @media (max-width: 576px) {
    .footer {
      padding: 40px 10px 15px;
      /* Removed border-top-left-radius and border-top-right-radius */
      margin-top: 0; /* Removed negative margin */
    }
    .footer-content {
      grid-template-columns: 1fr; /* Single column on mobile */
      gap: 20px;
    }
    .footer-column {
      padding: 15px;
    }
    .footer-brand {
      font-size: 28px;
    }
    .email-input, .email-submit-button {
      font-size: 15px;
      padding: 10px 12px;
    }
    .social-icon-link {
      width: 40px;
      height: 40px;
      font-size: 24px;
    }
  }
`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this 'email' to your backend API
      // Example: fetch('/api/send-email', { method: 'POST', body: JSON.stringify({ email }) })
      //   .then(response => response.json())
      //   .then(data => {
      //     setMessage('Thank you for subscribing!');
      //     setEmail('');
      //   })
      //   .catch(error => {
      //     setMessage('Failed to send email. Please try again.');
      //     console.error('Email send error:', error);
      //   });

      // For now, simulate success
      console.log(`Simulating email subscription for: ${email}`);
      setMessage('Thank you for your message! We will get back to you soon.');
      setEmail(''); // Clear the input field
    } else {
      setMessage('Please enter a valid email address.');
    }
    // Clear message after some time
    setTimeout(() => setMessage(''), 5000);
  };

  return (
    <>
      <style>{FooterCSS}</style>
      <footer className="footer">
        <div className="footer-content">
          {/* Column 1: FreshFare Name */}
          <div className="footer-column">
            <h3 className="footer-brand">FreshFare</h3>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)' }}>
              Your daily dose of fresh and quality products, delivered with care.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="link-arrow-icon">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
                Home
              </a></li>
              <li><a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="link-arrow-icon">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
                About Us
              </a></li>
              <li><a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="link-arrow-icon">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
                Services
              </a></li>
              <li><a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="link-arrow-icon">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
                Products
              </a></li>
              <li><a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="link-arrow-icon">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
                Contact
              </a></li>
            </ul>
          </div>

          {/* Column 3: Customer Service (Example, can be changed) */}
          <div className="footer-column">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="link-arrow-icon">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
                FAQs
              </a></li>
              <li><a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="link-arrow-icon">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
                Shipping & Returns
              </a></li>
              <li><a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="link-arrow-icon">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
                Privacy Policy
              </a></li>
              <li><a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="link-arrow-icon">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
                Terms & Conditions
              </a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Email Bar */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '15px' }}>
              Have questions? Send us a message!
            </p>
            <div className="email-bar-container">
              <form onSubmit={handleEmailSubmit}>
                <div className="email-input-group">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="email-input-icon">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <input
                    type="email"
                    placeholder="Your Message!"
                    className="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="email-submit-button">
                    Send
                  </button>
                </div>
                <p className="email-message" style={{ color: message.includes('Thank you') ? '#FFD700' : '#E74C3C' }}>
                  {message}
                </p>
              </form>
            </div>

            {/* Social Media Icons */}
            <div className="social-media-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                {/* Facebook Icon SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h3V0h-3c-3.87 0-5 3.03-5 5.5v2H7.5v4H11v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                {/* Twitter Icon SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M22.46 6c-.77.34-1.6.56-2.46.66.89-.53 1.57-1.37 1.89-2.37-.83.49-1.75.85-2.72 1.04C18.3 4.2 17.22 3.6 16 3.6c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.99C7.75 8.61 4.1 6.6 1.76 3.5c-.37.63-.58 1.37-.58 2.16 0 1.49.76 2.8 1.92 3.56-.7-.02-1.36-.22-1.93-.53v.05c0 2.08 1.48 3.81 3.44 4.2-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.7 2.14 2.94 4.03 2.97-1.47 1.15-3.32 1.84-5.32 1.84-.35 0-.69-.02-1.03-.06C2.9 20.29 5.06 21 7.37 21c8.84 0 13.67-7.3 13.67-13.68 0-.21-.01-.43-.01-.64.94-.68 1.75-1.53 2.4-2.5z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                {/* Instagram Icon SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2A2.6 2.6 0 005 6.6v8.8c0 1.43 1.17 2.6 2.6 2.6h8.8c1.43 0 2.6-1.17 2.6-2.6V6.6A2.6 2.6 0 0016.2 4H7.6zm9.6 1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-5.8 3c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                {/* LinkedIn Icon SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M20.447 20.452h-3.554v-5.564c0-1.303-.022-2.983-1.815-2.983-1.816 0-2.094 1.418-2.094 2.885v5.662H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.368 4.267 5.455v6.296zM5.337 7.433c-1.218 0-2.201-.983-2.201-2.201 0-1.217.983-2.2 2.201-2.2s2.201.983 2.201 2.2c0 1.218-.983 2.201-2.201 2.201zM7.157 20.452H3.554V9h3.603v11.452z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
            <strong>
                &copy; {new Date().getFullYear()} FreshFare. All rights reserved.
            </strong>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
