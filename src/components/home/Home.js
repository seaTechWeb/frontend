import React from 'react';
import FirstSection from './FirstSection';
import WhatWeDo from './WhatWeDo';
import ClientSpotlight from './ClientSpotlight';
import Technology from './Technology';
import OurStory from './OurStory';
import OurCompanies from './OurCompanies';
import ContactPage from '../ContactPage';

export default function Home() {
  return (
    <div>
      <FirstSection />
      <WhatWeDo id="whatWeDo" />
      <OurCompany id="OurCompanies"/>
      <ClientSpotlight id="clients-spotlight" />
      <Technology id="technology" />
      <OurStory id="ourStory" />
      <ContactPage/>
    </div>
  )
}
