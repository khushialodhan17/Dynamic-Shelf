import ProductSearchBar from "./DiyaSearchBar";
import "./HeroSection.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import background from "../assets/bd_img.jpg";

const imagesTop = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

const Carousel = ({ images }) => (
  <div className="carousel-track">
    {[...images, ...images, ...images].map((src, index) => (
      <img key={index} src={src} alt={`carousel-${index}`} className="carousel-img" />
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${background})` }}
        ></div>

        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-heading">Born To Price Better!</h1>
            <ProductSearchBar />
          </div>
        </div>
      </div>

      <div className="carousel-wrapper below-hero">
        <Carousel images={imagesTop} />
      </div>
    </>
  );
};

export default HeroSection;