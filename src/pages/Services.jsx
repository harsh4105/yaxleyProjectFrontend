import React from 'react';
import HeroForService from '../components/HeroSection/HeroForService';
import CounsellingForService from '../components/Counselling/Counselling';
import AdmissionForService from '../components/AdmissionForServices/AdmissionForService';
import ScholarshipForService from '../components/Scholarship/Scholarship';
import VisaForService from '../components/VisaProcessing/VisaProcessing';
import Faqs from '../components/Faqs/Faqs';
import EducationLoanForService from '../components/EducationLoan/EducationLoan';

const Services = () => {
  return (
    <div>
        <HeroForService/>
        <CounsellingForService/>
        <AdmissionForService/>
        <ScholarshipForService/>
        <VisaForService/>
        <EducationLoanForService/>
        <Faqs/>
    </div>
  );
};

export default Services;
