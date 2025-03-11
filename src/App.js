import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Adidas from './components/project/Adidas';
import Cara from './components/project/Cara';
import FairAndHandsome from './components/project/FairAndHandsome';
import Ukieri from './components/project/Ukieri';
import Volkswagen from './components/project/Volkswagen';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import WebDevelopmentServices from './components/What_we_do/WebDevelopmentServices';
import MobileDevelopment from './components/What_we_do/MobileDevelopment';
import BrandingAndIdentity from './components/What_we_do/BrandingAndIdentity';
import DigitalMarketing from './components/What_we_do/DigitalMarketing';
import Consulting from './components/What_we_do/Consulting';
import XpertsHome from './components/Xperts_Restaurant/XpertsHome';

function App() {
  return (
    <Router>
      <div className="roboto-slab">
        <ScrollToTop />
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Adidas' element={<Adidas />} />
            <Route exact path='/cara' element={<Cara />} />
            <Route exact path='/fairandhandsome' element={<FairAndHandsome />} />
            <Route exact path='/ukieri' element={<Ukieri />} />
            <Route exact path='/volkswagen' element={<Volkswagen />} />
            <Route exact path='/whatWeWebDevelopment' element={<WebDevelopmentServices />} />
            <Route exact path='/whatWeMobileDevelopment' element={<MobileDevelopment />} />
            <Route exact path='/whatWebranding' element={<BrandingAndIdentity />} />
            <Route exact path='/whatWeDigitalMarketing' element={<DigitalMarketing />} />
            <Route exact path='/whatWeconsulting' element={<Consulting />} />
            <Route exact path='/orderxperts/*' element={<XpertsHome />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;