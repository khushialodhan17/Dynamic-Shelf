README FILE CONTENT

*Project Title: Dynamic Pricing of Perishable Goods*

*Overview:*

Perishable grocery items often go to waste simply because their prices don’t adapt as their expiry dates approach. This project introduces a machine learning-based web platform that applies *dynamic pricing* to such items based on key parameters like expiry date, stock quantity, and category. It helps reduce waste, increase sales, and create transparency between retailers and consumers.


*Key Features:*

* Predicts discounted prices for near-expiry products using a trained XGBoost model.
* Fully responsive web interface built with React and CSS.
* Flask backend handles model inference and routes.
* MongoDB Atlas cloud database stores and updates product information in real time.
* REST APIs power seamless communication between frontend and backend.


*Tech Stack:*

Frontend: React, CSS
Backend: Flask (Python)
Machine Learning: XGBoost
Database: MongoDB Atlas
Communication: REST APIs


*How the System Works:*

1. Admin uploads a CSV or JSON file containing product data (name, category, price, expiry date, etc.).
2. Flask backend receives the data, calculates days_to_expiry, and preprocesses features.
3. Preprocessed data is passed to the trained XGBoost model to predict new, discounted prices.
4. The product entries, along with predicted prices, are stored in MongoDB Atlas.
5. The React frontend fetches product data using Flask APIs and displays it to users.


*API Overview:*

* /upload – Upload product data (admin)
* /get-products – Fetch product list with optional filters
* /predict-price – Optional endpoint for price re-calculation


*Sample Product Entry (Stored in MongoDB):*

Product Name: Fortune Mustard Oil
Category: Oil
Quantity: 20
Actual Price: ₹145.00
Expiry Date: 25 July 2025
Predicted Price: ₹112.00
Image URL: [Stored or linked image]
Days to Expiry: 10


*Use Cases:*

* Enables *retailers* to apply smart pricing on stock nearing expiry.
* Helps *consumers* access more transparent and fair pricing.
* Builds trust in *delivery platforms* like Blinkit and Zomato by promoting expiry-aware shopping.


*Folder Structure:*

* frontend/ – React components, routing, and UI assets
* backend/ – Flask APIs, trained model file, preprocessing scripts
* dataset/ – Raw and cleaned datasets
* model/ – Trained XGBoost model (.pkl or .joblib)


*To Run Locally:*
Deployed on Vercel
Link - 


*Future Enhancements:*

* Add authentication for secure uploads
* Build category-level insights and analytics
* Explore pipeline integration to reduce redundant preprocessing


*Contributors:*

Team members name:
1) Ashiya garg
2) Diya Arora
3) Khushi Alodhan
4) Ananya Goyal

Developed during Walmart Sparkathon 2025