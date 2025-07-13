import './OurServices.css';
import fruitsImg from '../assets/vegan.png';
import vegetableImg from '../assets/natural.png';
import meatImg from '../assets/ecofriendly.png';
import dairyImg from '../assets/natIngredients.png';

const services = [
  {
    title: "ML-Based Discount Pricing",
    image: fruitsImg,
    fact: "Applies machine learning to suggest discounted prices depending on how close the product is to expiry. Tech Stack: Python (XGBoost ML model), Pandas (feature engineering), Flask (API), MongoDB (product data storage).",
  },
  {
    title: "Product Search by Name",
    image: vegetableImg,
    fact: "Allows users to search for products by name and instantly view matching items along with pricing details. Tech Stack: React (search UI), JavaScript (search logic), Flask (search endpoint), MongoDB (text-based product search).",
  },
  {
    title: "Result Page Navigation",
    image: dairyImg,
    fact: "When a user submits a search, the system fetches matching product data from the backend in real time and displays it on a dedicated results page. Tech Stack: React Router (page navigation), Axios (API calls), Flask (backend API), MongoDB (search result data fetch).",
  },
  {
    title: "Live Product Cards",
    image: meatImg,
    fact: "Each product card shows the image, name, expiry date, original price, and dynamically predicted discount price. Tech Stack: React (UI rendering), JavaScript (dynamic props), Flask (API response delivery), MongoDB (product info storage).",
  },
];

const OurServices = () => {
  return (
    <div className="services-container">
      <h2>Explore What Makes Us Smarter</h2>
      <p className="subtitle">
        Smarter Pricing. Less Waste. More Profit.
      </p>
      <div className="card-grid">
        {services.map((service, index) => (
          <div className="card" key={index}>
          <img src={service.image} alt={service.title} />
          <h3>{service.title}</h3>
          <p className="description">
            {service.fact.split("Tech Stack:")[0]}
          </p>
          <div className="tech-stack-box">
             <strong>🛠 Tech Stack:</strong> {service.fact.split("Tech Stack:")[1]}
          </div>
      </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
