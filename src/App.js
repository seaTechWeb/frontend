import Navbar from './components/Navbar';
import './App.css';
import FirstSection from './components/FirstSection';
import WhatWeDo from './components/WhatWeDo';
import ClientSpotlight from './components/ClientSpotlight';
import Technology from './components/Technology';
import OurStory from './components/OurStory';
import ContactUs from './components/ContactUs';


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
      </div>
    </>
  );
}

export default App;
