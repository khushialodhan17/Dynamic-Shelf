import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./About.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/fruits.jpeg";
import img2 from "../assets/vegetable.png";
import img3 from "../assets/dairy.avif";
import img4 from "../assets/meat.jpeg";

const About = () => {
  const images = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="about-section">
      <div className="about-wrapper">
        <div className="about-text">
          <h2>About Our Grocery Store</h2>
          <h3>What if your pricing knew exactly when to drop?</h3>
          <h3>We hate waste. We love smart solutions.</h3>
          <p>
            That’s why we built a system that thinks before pricing. 
            Our Smart Dynamic Pricing System uses machine learning to recommend the perfect discount for perishable items — based on how close they are to expiry, how fast they’re selling, and how much stock is left.
            Powered by a real-time POS interface, this solution adjusts prices dynamically, helping retailers:
            <ul>
              <li>Reduce food waste</li>
              <li>Boost revenue</li>
              <li>Clear near-expiry stock — before it’s too late</li>
              <li>No more guesswork. No more last-minute throwaways.</li>
            </ul>
            Just a sleek, intelligent dashboard that updates pricing as your inventory ages — whether you're a kirana shop or a large-scale retailer.
            Because pricing should be as dynamic as the products it’s applied to.
          </p>
          
        </div>

        <div className="carousel-container">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div key={idx} className="carousel-slide">
                <img src={img} alt={`Slide ${idx}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default About;