import React from 'react'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import GallaryPage from './components/GallaryPage.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import OurServices from './components/OurServices.jsx'

const App = () => {
  return (
    <>
      <style>{AppCSS}</style>
      <Header />
      <HeroSection />
      <About/>
      <OurServices/>
      <GallaryPage/>
      <Footer />
    </>
  )
}

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
