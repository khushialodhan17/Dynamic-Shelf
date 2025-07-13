import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import OurServices from './components/OurServices.jsx';
import OurTeam from './components/OurTeam.jsx';
import SearchResults from './components/SearchResults.jsx'; 

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <div id="home"><HeroSection /></div>
            <div id="about"><About /></div>
            <div id="services"><OurServices /></div>
            <div id="team"><OurTeam /></div>
            <div id="contact"><Footer /></div>
          </>
        } />
        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </>
  );
};


const AppCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f0f2f5; /* Light background for the whole page */
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`
export default App