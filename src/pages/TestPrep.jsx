import React from "react";
import HeroForTestPrep from "../components/HeroSection/HeroForTestPrep";
import IELTS_Section from "../components/IELTS_Section/IELTS_Section";
import IELTS_Modules from "../components/IELTS_Modules/IELTS_Modules";
import WeGotYouCovered from "../components/WeGotYouCovered/WeGotYouCovered";
import BatchesForYou from "../components/BatchesForYou/BactchesForYou";
import OurExpertsInYourSupports from "../components/OurExpertsInYourSupports/OurExpertsInYourSupports";
import Testimonials from  "../components/Testimonial/Testimonials"
import Faqs from '../components/Faqs/Faqs'
const TestPrep=()=>{
   return(
    <div>
        <HeroForTestPrep/>
        <IELTS_Section/>
        <IELTS_Modules/>
        <WeGotYouCovered/>
        <BatchesForYou/>
        <OurExpertsInYourSupports/>
        <Testimonials/>
        <Faqs/>
    </div>
   )
}

export default TestPrep;