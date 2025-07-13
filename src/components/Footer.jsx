import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const Footer = () => {
  const [formData, setFormData] = useState({ user_email: '', user_message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToSection = (e, id) => {
  e.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_ti6hr4n',
      'template_3uvd489',
      formData,
      '_GTGtRebjd7znLeay'
    )
    .then(() => {
      setStatusMessage('Message sent! ✅');
      setFormData({ user_email: '', user_message: '' });
    })
    .catch((error) => {
      console.error(error);
      setStatusMessage('Failed to send. Try again.');
    });

    setTimeout(() => setStatusMessage(''), 5000);
  };

  return (
    <>
      <style>{FooterCSS}</style>
      <footer className="footer">
        <div className="footer-content">
          
          <div className="footer-column">
            <h3>FlexShelf</h3>
            <p>Smart shopping meets real-time pricing — discover the best deals on near-expiry products with zero waste.</p>
          </div>

        <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Us</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <form className="footer-form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
              <textarea
                name="user_message"
                rows="3"
                placeholder="Your Message"
                value={formData.user_message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send</button>
            </form>
            {statusMessage && <p style={{ marginTop: '10px' }}>{statusMessage}</p>}
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} FlexShelf. All rights reserved.
        </div>
      </footer>
    </>
  );
};


const FooterCSS = `
  .footer {
    background-color: #1a1c24;
    color: white;
    padding: 80px 20px 30px;
    font-family: 'Inter', sans-serif;
  }

  .footer-content {
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  .footer-link {
  color: rgba(255,255,255,0.85);
  font-size: 16px;
  margin: 8px 0;
  display: block;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #FFD700;
}

  .footer-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05); /* semi-transparent glassy */
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.footer-column:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

  .footer-column h3 {
    color: #FFC107;
    font-size: 22px;
    margin-bottom: 20px;
    position: relative;
  }

  .footer-column h3::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 50px;
    height: 3px;
    background-color: #FFC107;
    border-radius: 2px;
  }

  .footer-column p,
  .footer-column a {
    color: rgba(255, 255, 255, 0.85);
    font-size: 18px;
    text-decoration: none;
    margin: 8px 0;
    font-family: Curier;
    display: block;
  }

  .footer-column a:hover {
    color: #FFD700;
  }

  .footer-form input,
  .footer-form textarea {
    width: 90%;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 6px;
    border: none;
    font-size: 16px;
  }

  .footer-form button {
    background-color: #FFC107;
    color: black;
    padding: 10px 20px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 6px;
  }

  .footer-form button:hover {
    background-color: #FFD700;
  }

  .social-icons {
    display: flex;
    gap: 20px;
    margin-top: 15px;
  }

  .social-icons a {
    color: white;
    font-size: 26px;
    transition: all 0.3s;
  }

  .social-icons a:hover {
    color: #FFC107;
  }

  .footer-bottom {
    text-align: center;
    margin-top: 30px;
    font-size: 14px;
    color: #aaa;
  }

  @media (max-width: 768px) {
  .footer {
    padding: 40px 15px 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-column {
    margin-bottom: 25px;
  }

  .footer-form button {
    width: auto;
  }

  .social-icons {
    justify-content: center;
  }
}
`;


export default Footer;