import React from 'react';
import Hero from '../components/HeroSection/Hero';
import Difference from '../components/Difference/Difference';
import Service_for_Home from '../components/Service_for_home/Service_for_home';
import CountryInfo from '../components/CountryInfo/Country';
import CourseSearch from '../components/CourseSearch/CourseSearch';
import Events from '../components/Events/Events';
import Testimonils from '../components/Testimonial/Testimonials';
import Faqs from '../components/Faqs/Faqs';

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Difference/>
        <Service_for_Home/>
        <CountryInfo/>
        <CourseSearch/>
        <Events/>
        <Testimonils/>
        <Faqs/>
    </div>
  );
};

export default HomePage;
