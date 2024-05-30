import Navbar from './components/Navbar';
import './App.css';
import FirstSection from './components/FirstSection';
import WhatWeDo from './components/WhatWeDo';
import ClientSpotlight from './components/ClientSpotlight';
import Technology from './components/Technology';
import OurStory from './components/OurStory';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div className='roboto-slab'>
      <Navbar />
      <FirstSection />
      <WhatWeDo />
      <ClientSpotlight />
      <Technology />
      <OurStory />
      <ContactUs />
      <Footer/>
      </div>
    </>
  );
}

export default App;
