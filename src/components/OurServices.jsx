// import React from 'react';
// import './OurServices.css';
// import fruitsImg from '../assets/vegan.png';
// import vegetableImg from '../assets/natural.png';
// import meatImg from '../assets/ecofriendly.png';
// import dairyImg from '../assets/natIngredients.png';

// const services = [
//   {
//     title: "Fresh Fruits",
//     image: fruitsImg,
//     fact: "Fruits are highly perishable and must be stored at low temperatures to retain freshness.",
//   },
//   {
//     title: "Green Vegetables",
//     image: vegetableImg,
//     fact: "Leafy greens lose nutrients quickly; eco-packaging slows this process.",
//   },
//   {
//     title: "Dairy Products",
//     image: dairyImg,
//     fact: "Dairy must be refrigerated under 4°C to prevent spoilage and bacterial growth.",
//   },
//   {
//     title: "Organic Meat",
//     image: meatImg,
//     fact: "Vacuum-sealed eco-packaging can extend the shelf life of organic meats.",
//   },
// ];

// const OurServices = () => {
//   return (
//     <div className="services-container">
//       <h2>Our Services</h2>
//       <div className="card-grid">
//         {services.map((service, index) => (
//           <div className="card" key={index}>
//             <img src={service.image} alt={service.title} />
//             <h3>{service.title}</h3>
//             <p>{service.fact}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurServices;



import React from 'react';
import './OurServices.css';
import fruitsImg from '../assets/vegan.png';
import vegetableImg from '../assets/natural.png';
import meatImg from '../assets/ecofriendly.png';
import dairyImg from '../assets/natIngredients.png';

const services = [
  {
    title: "Reduce Food Waste",
    image: fruitsImg,
    fact: "Our system intelligently lowers prices as expiry approaches, helping retailers sell products before they go to waste.",
  },
  {
    title: "Boost Revenue",
    image: vegetableImg,
    fact: "Dynamic discounts optimize sell-through rates while maintaining profitability — no steep markdowns unless necessary.",
  },
  {
    title: "Clear Near-Expiry Stock",
    image: dairyImg,
    fact: "Real-time expiry tracking triggers smart price drops, helping you move aging stock quickly and efficiently.",
  },
  {
    title: "No More Guesswork",
    image: meatImg,
    fact: "Say goodbye to manual pricing decisions. Our dashboard automates and visualizes everything — from stock levels to expiry trends.",
  },
];

const OurServices = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <p className="subtitle">
        Smarter Pricing. Less Waste. More Profit.
      </p>
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
