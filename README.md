# FlexShelf

## Project Title: 
Dynamic Pricing of Perishable Goods

## Overview:
Perishable grocery items often go to waste simply because their prices don’t adapt as their expiry dates approach. This project introduces a machine learning-based web platform that applies **dynamic pricing** to such items based on key parameters like expiry date, stock quantity, inventory turnover rate and category. It helps reduce waste, increase sales, and create transparency between retailers and consumers.

## Key Features:
- Predicts discounted prices for near-expiry products using a trained XGBoost model.
- Fully responsive web interface built with **React.js and CSS**.
- **Flask** backend handles model inference and routes.
- **MongoDB Atlas cloud** database stores and updates product information in real time.
- **REST APIs** power seamless communication between frontend and backend.
- Users can send suggestions or feedback directly via **EmailJS** integration in the frontend.  


## Tech Stack:
- **Frontend:** React.js, CSS
- **Backend:** Flask (Python)
- **Machine Learning:** XGBoost
- **Database:** MongoDB Atlas
- **Communication:** REST APIs


## How the System Works:

1. Admin uploads a CSV or JSON file containing product data (name, category, price, expiry date, etc.).
2. Flask backend receives the data, calculates `days_to_expiry`, and preprocesses features.
3. Preprocessed data is passed to the trained XGBoost model to predict new, discounted prices.
4. The product entries, along with predicted prices, are stored in MongoDB Atlas.
5. The React frontend fetches product data using Flask APIs and displays it to users.

## 📡 API Overview

| Endpoint         | Description                                |
|------------------|--------------------------------------------|
| `/upload`        | Upload product data (admin only)           |
| `/get-products`  | Fetch product list with optional filters   |
| `/predict-price` | Recalculate discounted prices (optional)   |


## Sample Product Entry (Stored in MongoDB):

```json
{
"Product Name": "Fortune Mustard Oil",
  "Category": "Oil",
  "Quantity": 20,
  "Actual Price": "₹145.00",
  "Expiry Date": "25 July 2025",
  "Predicted Price": "₹112.00",
  "Image URL": "[Stored or linked image]",
  "Days to Expiry": 10
}
```



## Use Cases:
- Enables **retailers** to apply smart pricing on stock nearing expiry.
- Helps **consumers** access more transparent and fair pricing.
- Builds trust in **delivery platforms** like Blinkit and Zomato by promoting expiry-aware shopping.

## Folder Structure

- `user/` – React components, routing, UI assets  
  - `components/`    
  - `assets/`  

- `backend/` – Flask APIs, model, preprocessing scripts  
  - `backend.py`  
  - `price_predicted.py`   

- `dataset/` – Raw and cleaned datasets  
  - `Updated_Grocery_Inventory_with_Images_Dates_seven.csv`  
  - `final_output_with_predictions.csv`  

- `model/` – Trained XGBoost model files  
  - `feature_scaler.pkl`  
  - `xgboost_discount_model.pkl`

- `README.md`

## To Run:
- Deployed frontend on : **Vercel**
- Deployed backend on : **Render**
- Link : **https://flexshelf.vercel.app/**

## GitHub Repositories:
- Frontend: https://github.com/khushialodhan17/FlexShelf 
- Backend: https://github.com/khushialodhan17/FlexShelf-Backend


## Future Enhancements:
- Add authentication for secure uploads
- Build category-level insights and analytics
- Explore pipeline integration to reduce redundant preprocessing


## Community & Contributions:
- Ashiya Garg (Machine Learning & Backend Integration)
- Diya Arora (Machine Learning, Backend & Content)
- Khushi Alodhan (Frontend Development & Backend Integration)
- Ananya Goyal (Frontend & Backend Integration)

Developed during **Walmart Sparkathon-2025** 
- **Theme**- Reimagining customer experience with emerging technologies
