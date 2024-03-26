import React, { useState } from 'react';
import HeroForContactUs from '../components/HeroSection/HeroForContactUs';
import OurBranchLocations from '../components/OurBranchLocations/OurBranchLocations';
import LeaveMessage from '../components/LeaveMessage/LeaveMessage';
import Faqs from '../components/ContactUsFAQ/Faqs/Faqs';

const ContactUs = () => {
  return (
    <div>
      <HeroForContactUs/>
      <OurBranchLocations/>
      <LeaveMessage/>
      <Faqs/>
    </div>
  );
};

export default ContactUs;
