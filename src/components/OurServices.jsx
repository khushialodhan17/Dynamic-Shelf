import React from 'react';
import './OurServices.css';
import fruitsImg from '../assets/vegan.png';
import vegetableImg from '../assets/natural.png';
import meatImg from '../assets/ecofriendly.png';
import dairyImg from '../assets/natIngredients.png';

const services = [
  {
    title: "Fresh Fruits",
    image: fruitsImg,
    fact: "Fruits are highly perishable and must be stored at low temperatures to retain freshness.",
  },
  {
    title: "Green Vegetables",
    image: vegetableImg,
    fact: "Leafy greens lose nutrients quickly; eco-packaging slows this process.",
  },
  {
    title: "Dairy Products",
    image: dairyImg,
    fact: "Dairy must be refrigerated under 4°C to prevent spoilage and bacterial growth.",
  },
  {
    title: "Organic Meat",
    image: meatImg,
    fact: "Vacuum-sealed eco-packaging can extend the shelf life of organic meats.",
  },
];

const OurServices = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="card-grid">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;