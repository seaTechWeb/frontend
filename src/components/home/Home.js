import React from 'react';
import FirstSection from './FirstSection';
import WhatWeDo from './WhatWeDo';
import ClientSpotlight from './ClientSpotlight';
import Technology from './Technology';
import OurStory from './OurStory';
import ContactUs from './ContactUs';
import OurCompany from './OurCompany';

export default function Home() {
  return (
    <div>
      <FirstSection />
      <WhatWeDo id="whatWeDo" />
      <OurCompany id="ourCompany"/>
      <ClientSpotlight id="clients-spotlight" />
      <Technology id="technology" />
      <OurStory id="ourStory" />
      <ContactUs id="contactUs" />
    </div>
  )
}
