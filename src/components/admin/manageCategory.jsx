// import React, { useState, useEffect } from 'react';

// // Main App Component
// const App = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [entriesPerPage, setEntriesPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);

//   // Simulate fetching data from a backend
//   useEffect(() => {
//     const fetchCategories = () => {
//       setLoading(true);
//       // Dummy data for categories
//       const dummyData = [
//         { id: 1, image: 'https://placehold.co/40x40/FF6347/FFFFFF?text=Food', category: 'Food' },
//         { id: 2, image: 'https://placehold.co/40x40/4682B4/FFFFFF?text=Home', category: 'Home & Cleaning' },
//         { id: 3, image: 'https://placehold.co/40x40/DA70D6/FFFFFF?text=Baby', category: 'Baby & Child Care' },
//         { id: 4, image: 'https://placehold.co/40x40/32CD32/FFFFFF?text=Pet', category: 'Pet Care' },
//         { id: 5, image: 'https://placehold.co/40x40/FFD700/FFFFFF?text=Sport', category: 'Sports & Nutrition' },
//         { id: 6, image: 'https://placehold.co/40x40/8A2BE2/FFFFFF?text=Health', category: 'Health & HouseHold' },
//         { id: 7, image: 'https://placehold.co/40x40/FF6347/FFFFFF?text=Drink', category: 'Beverages' },
//         { id: 8, image: 'https://placehold.co/40x40/4682B4/FFFFFF?text=Snack', category: 'Snacks' },
//         { id: 9, image: 'https://placehold.co/40x40/DA70D6/FFFFFF?text=Dairy', category: 'Dairy & Eggs' },
//         { id: 10, image: 'https://placehold.co/40x40/32CD32/FFFFFF?text=Bakery', category: 'Bakery' },
//         { id: 11, image: 'https://placehold.co/40x40/FFD700/FFFFFF?text=Frozen', category: 'Frozen Foods' },
//         { id: 12, image: 'https://placehold.co/40x40/8A2BE2/FFFFFF?text=Produce', category: 'Fresh Produce' },
//       ];
//       setTimeout(() => { // Simulate network delay
//         setCategories(dummyData);
//         setLoading(false);
//       }, 500);
//     };

//     fetchCategories();
//   }, []);

//   // Filtered categories based on search term
//   const filteredCategories = categories.filter(category =>
//     category.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination logic
//   const indexOfLastEntry = currentPage * entriesPerPage;
//   const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//   const currentEntries = filteredCategories.slice(indexOfFirstEntry, indexOfLastEntry);

//   const totalPages = Math.ceil(filteredCategories.length / entriesPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   // Inline CSS for the entire application
//   const appStyles = `
//     @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

//     body {
//       font-family: 'Inter', sans-serif;
//       margin: 0;
//       background-color: #f4f7f6;
//       display: flex;
//       min-height: 100vh;
//       overflow-x: hidden;
//     }

//     .container {
//       display: flex;
//       width: 100%;
//     }

//     .sidebar {
//       width: 250px;
//       background-color: #28a745; /* Green */
//       color: white;
//       padding: 20px 0;
//       box-shadow: 2px 0 5px rgba(0,0,0,0.1);
//       display: flex;
//       flex-direction: column;
//       height: 100vh; /* Full height */
//       position: fixed; /* Fixed sidebar */
//       left: 0;
//       top: 0;
//       overflow-y: auto; /* Scrollable if content exceeds height */
//       z-index: 1000;
//     }

//     .sidebar-header {
//       padding: 15px 20px;
//       font-size: 24px;
//       font-weight: 600;
//       border-bottom: 1px solid rgba(255,255,255,0.2);
//       margin-bottom: 20px;
//     }

//     .sidebar-section-title {
//       padding: 10px 20px;
//       font-size: 14px;
//       text-transform: uppercase;
//       color: rgba(255,255,255,0.7);
//       margin-top: 15px;
//       margin-bottom: 5px;
//     }

//     .sidebar-nav ul {
//       list-style: none;
//       padding: 0;
//       margin: 0;
//     }

//     .sidebar-nav li {
//       margin-bottom: 5px;
//     }

//     .sidebar-nav a {
//       display: flex;
//       align-items: center;
//       padding: 12px 20px;
//       color: white;
//       text-decoration: none;
//       font-size: 16px;
//       transition: background-color 0.3s ease;
//       border-radius: 8px; /* Rounded corners */
//       margin: 0 10px; /* Margin for rounded effect */
//     }

//     .sidebar-nav a:hover,
//     .sidebar-nav a.active {
//       background-color: rgba(0,0,0,0.2);
//     }

//     .sidebar-nav .icon {
//       margin-right: 15px;
//       font-size: 18px;
//     }

//     .sidebar-footer {
//       margin-top: auto; /* Pushes to the bottom */
//       padding: 20px;
//       font-size: 14px;
//       color: rgba(255,255,255,0.7);
//       text-align: center;
//       border-top: 1px solid rgba(255,255,255,0.2);
//     }

//     .main-content {
//       flex-grow: 1;
//       margin-left: 250px; /* Offset for fixed sidebar */
//       padding: 20px;
//       background-color: #f4f7f6;
//       display: flex;
//       flex-direction: column;
//       width: calc(100% - 250px); /* Adjust width */
//     }

//     .header {
//       background-color: white;
//       padding: 15px 20px;
//       box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//       display: flex;
//       justify-content: flex-end;
//       align-items: center;
//       border-radius: 10px; /* Rounded corners */
//       margin-bottom: 20px;
//     }

//     .header-account {
//       font-size: 16px;
//       font-weight: 500;
//       color: #333;
//     }

//     .page-title {
//       font-size: 28px;
//       font-weight: 600;
//       color: #333;
//       margin-bottom: 20px;
//     }

//     .card {
//       background-color: white;
//       padding: 20px;
//       border-radius: 10px;
//       box-shadow: 0 2px 8px rgba(0,0,0,0.05);
//     }

//     .table-controls {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 20px;
//       flex-wrap: wrap; /* Allow wrapping on smaller screens */
//       gap: 15px;
//     }

//     .table-controls label {
//       font-size: 15px;
//       color: #555;
//     }

//     .table-controls select,
//     .table-controls input {
//       padding: 8px 12px;
//       border: 1px solid #ddd;
//       border-radius: 5px;
//       font-size: 15px;
//       color: #333;
//     }

//     .table-responsive {
//       overflow-x: auto; /* Horizontal scroll for tables on small screens */
//     }

//     .data-table {
//       width: 100%;
//       border-collapse: collapse;
//       margin-top: 15px;
//     }

//     .data-table th,
//     .data-table td {
//       padding: 12px 15px;
//       text-align: left;
//       border-bottom: 1px solid #eee;
//       vertical-align: middle;
//     }

//     .data-table th {
//       background-color: #f8f8f8;
//       font-weight: 600;
//       color: #555;
//       cursor: pointer; /* Indicate sortable */
//     }

//     .data-table th:first-child {
//       border-top-left-radius: 8px;
//     }

//     .data-table th:last-child {
//       border-top-right-radius: 8px;
//     }

//     .data-table img {
//       width: 40px;
//       height: 40px;
//       border-radius: 5px;
//       object-fit: cover;
//     }

//     .action-button {
//       background-color: #dc3545; /* Red */
//       color: white;
//       border: none;
//       padding: 8px 12px;
//       border-radius: 5px;
//       cursor: pointer;
//       font-size: 14px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       transition: background-color 0.3s ease;
//     }

//     .action-button:hover {
//       background-color: #c82333;
//     }

//     .pagination {
//       display: flex;
//       justify-content: flex-end;
//       align-items: center;
//       margin-top: 20px;
//       flex-wrap: wrap;
//       gap: 10px;
//     }

//     .pagination span {
//       font-size: 15px;
//       color: #555;
//       margin-right: 10px;
//     }

//     .pagination button {
//       background-color: #f0f0f0;
//       border: 1px solid #ddd;
//       padding: 8px 15px;
//       border-radius: 5px;
//       cursor: pointer;
//       font-size: 15px;
//       color: #333;
//       transition: background-color 0.3s ease, border-color 0.3s ease;
//     }

//     .pagination button:hover:not(:disabled) {
//       background-color: #e0e0e0;
//       border-color: #ccc;
//     }

//     .pagination button:disabled {
//       cursor: not-allowed;
//       opacity: 0.6;
//     }

//     .pagination .page-number {
//       background-color: #007bff; /* Blue for active page */
//       color: white;
//       border-color: #007bff;
//     }

//     .pagination .page-number:hover {
//       background-color: #0056b3;
//       border-color: #0056b3;
//     }

//     .loading-spinner {
//       border: 4px solid #f3f3f3;
//       border-top: 4px solid #3498db;
//       border-radius: 50%;
//       width: 30px;
//       height: 30px;
//       animation: spin 1s linear infinite;
//       margin: 50px auto;
//     }

//     @keyframes spin {
//       0% { transform: rotate(0deg); }
//       100% { transform: rotate(360deg); }
//     }

//     /* Responsive adjustments */
//     @media (max-width: 768px) {
//       .sidebar {
//         width: 100%;
//         height: auto;
//         position: relative;
//         box-shadow: none;
//         padding-bottom: 0;
//       }

//       .main-content {
//         margin-left: 0;
//         width: 100%;
//       }

//       .sidebar-nav ul {
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: center;
//         padding: 0 10px;
//       }

//       .sidebar-nav li {
//         width: 48%; /* Two items per row */
//         margin: 5px 1%;
//       }

//       .sidebar-nav a {
//         justify-content: center;
//         text-align: center;
//         padding: 10px;
//       }

//       .sidebar-nav .icon {
//         margin-right: 0;
//         margin-bottom: 5px;
//       }

//       .sidebar-header, .sidebar-section-title, .sidebar-footer {
//         text-align: center;
//       }

//       .table-controls {
//         flex-direction: column;
//         align-items: flex-start;
//       }

//       .pagination {
//         justify-content: center;
//       }
//     }

//     @media (max-width: 480px) {
//       .sidebar-nav li {
//         width: 98%; /* One item per row */
//       }
//     }
//   `;

//   return (
//     <div className="container">
//       <style>{appStyles}</style>
//       <div className="sidebar">
//         <div className="sidebar-header">Grocery Store</div>
//         <div className="sidebar-section-title">MAIN</div>
//         <nav className="sidebar-nav">
//           <ul>
//             <li><a href="#" className="active"><i className="icon fas fa-tachometer-alt"></i> Dashboard</a></li>
//             <li><a href="#"><i className="icon fas fa-boxes"></i> Category</a></li>
//             <li><a href="#"><i className="icon fas fa-tags"></i> Items</a></li>
//             <li><a href="#"><i className="icon fas fa-shopping-cart"></i> Orders</a></li>
//             <li><a href="#"><i className="icon fas fa-users"></i> Users</a></li>
//             <li><a href="#"><i className="icon fas fa-bell"></i> Notification</a></li>
//             <li><a href="#"><i className="icon fas fa-envelope"></i> Messages</a></li>
//           </ul>
//         </nav>
//         <div className="sidebar-footer">
//           &copy; Quiritus Labs
//         </div>
//       </div>
//       <div className="main-content">
//         <div className="header">
//           <div className="header-account">Account</div>
//         </div>
//         <h1 className="page-title">Manage Category</h1>
//         <div className="card">
//           <div className="table-controls">
//             <div>
//               <label>
//                 Show{' '}
//                 <select value={entriesPerPage} onChange={(e) => setEntriesPerPage(Number(e.target.value))}>
//                   <option value="10">10</option>
//                   <option value="25">25</option>
//                   <option value="50">50</option>
//                   <option value="100">100</option>
//                 </select>{' '}
//                 entries
//               </label>
//             </div>
//             <div>
//               <label>
//                 Search:{' '}
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search..."
//                 />
//               </label>
//             </div>
//           </div>
//           <div className="table-responsive">
//             <table className="data-table">
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Image</th>
//                   <th>Category</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td colSpan="4">
//                       <div className="loading-spinner"></div>
//                     </td>
//                   </tr>
//                 ) : currentEntries.length > 0 ? (
//                   currentEntries.map((category) => (
//                     <tr key={category.id}>
//                       <td>{category.id}</td>
//                       <td>
//                         <img src={category.image} alt={category.category} onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/CCCCCC/000000?text=N/A" }} />
//                       </td>
//                       <td>{category.category}</td>
//                       <td>
//                         <button className="action-button">
//                           <i className="fas fa-trash-alt"></i>
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>No categories found.</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//           <div className="pagination">
//             <span>Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredCategories.length)} of {filteredCategories.length} entries</span>
//             <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i + 1}
//                 onClick={() => paginate(i + 1)}
//                 className={currentPage === i + 1 ? 'page-number' : ''}
//               >
//                 {i + 1}
//               </button>
//             ))}
//             <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
//           </div>
//         </div>
//       </div>
//       {/* Font Awesome for icons */}
