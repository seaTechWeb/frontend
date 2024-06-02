import React from 'react'
import FirstSection from './FirstSection';
import WhatWeDo from './WhatWeDo';
import ClientSpotlight from './ClientSpotlight';
import Technology from './Technology';
import OurStory from './OurStory';
import ContactUs from './ContactUs';

export default function Home() {
  return (
    <div>
      <FirstSection />
      <WhatWeDo />
      <ClientSpotlight />
      <Technology />
      <OurStory />
      <ContactUs />
    </div>
  )
}