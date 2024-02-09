import React from "react";
import HeroForTestPrep from "../components/HeroSection/HeroForTestPrep";
import IELTS_Section from "../components/IELTS_Section/IELTS_Section";
import IELTS_Modules from "../components/IELTS_Modules/IELTS_Modules";
import WeGotYouCovered from "../components/WeGotYouCovered/WeGotYouCovered";
import BatchesForYou from "../components/BatchesForYou/BactchesForYou";
import OurExpertsInYourSupports from "../components/OurExpertsInYourSupports/OurExpertsInYourSupports";
import Faqs from '../components/Faqs/Faqs'
import Carousel from "../components/Carousel/Carousel";
const TestPrep=()=>{
   return(
    <div>
        <HeroForTestPrep/>
        <IELTS_Section/>
        <IELTS_Modules/>
        <WeGotYouCovered/>
        <BatchesForYou/>
        <OurExpertsInYourSupports/>
        <Carousel/>
        <Faqs/>
    </div>
   )
}

export default TestPrep;