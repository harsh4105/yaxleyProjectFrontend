import React, { useState } from 'react';
import HeroForEvent from '../components/HeroSection/HeroForEvent';
import AllEventAW from '../components/AllEventsAndWebinar/AllEventAW';
import UpcomingEAW from '../components/UpcomingEventsAndWebinar/UpcomingEAW'
import Faqs from '../components/Faqs/Faqs';
const Events = () => {
    return(
      <div>
        <HeroForEvent/>
        <UpcomingEAW/>
        <AllEventAW/>
        <Faqs/>
      </div>
    )
    
};

export default Events;
