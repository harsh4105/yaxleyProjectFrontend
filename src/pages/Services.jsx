import React from 'react';
import HeroForService from '../components/HeroSection/HeroForService';
import Serviceblock from '../components/Serviceblock/Serviceblock';
import AdmisionImgServices from '../components/images/AdmisionImgServices.png';
import ScholarshipServicesImg from '../components/images/ScholarshipServicesImg.png';
import visaProcessingImg from '../components/images/visaProcessingImg.png';
import EducationLoanImg from '../components/images/EducationLoanImg.png';
import CoundellingForServices from '../components/images/CoundellingForServices.png';
import Faqs from '../components/ServicesPageFAQ/Faqs/Faqs';

const Services = () => {
  return (
    <div>
      <HeroForService />
      {
        ServiceData.map((item) =>
          <Serviceblock background={item.background} class={item.class} image={item.image} name={item.name} description={item.description} pointHeading={item.pointHeading} p1={item.p1} p2={item.p2} p3={item.p3} p4={item.p4} />
        )
      }
      <Faqs />
    </div>
  );
};

export default Services;

const ServiceData = [
  {
    name: 'Counselling',
    description: 'Our expert counselling sessions are designed to significantly aid you in choosing the ideal academic path that aligns with your career ambitions',
    pointHeading: 'What We Offer:',
    p1: "Personalized, career-focused counseling",
    p2: 'Focus on innovative courses and future-ready careers',
    p3: 'Assistance in choosing the ideal university and course',
    p4: 'Engaging interactions with university representatives',
    image: CoundellingForServices,
    class: '',
    background: 'white'
  },
  {
    name: 'Admission',
    description: 'Navigate your way to success! Choose the perfect intake, apply with precision to your ideal universities and courses, and watch offers roll in swiftly.',
    pointHeading: 'Exciting Offerings:',
    p1: "Flawless Application Strategy for Assured Acceptances",
    p2: 'Masterfully Written SOPS, LORS, and Resumes',
    p3: 'Real-Time Application Tracking and Proactive Liaison with Universities',
    p4: '',
    image: AdmisionImgServices,
    class: 'left',
    background: '#F0FFE2'
  },
  {
    name: "Scholarships's",
    description: 'We connect you with abundant scholarship opportunities from our worldwide universities, guiding you to identify and apply for the scholarships best suited for you.',
    pointHeading: 'What We Provide:',
    p1: "Updates on the latest and most valuable scholarships",
    p2: 'Expert advice on scholarship application processes',
    p3: 'Support in crafting compelling scholarship essays',
    p4: '',
    image: ScholarshipServicesImg,
    class: '',
    background: 'white'
  },
  {
    name: 'Visa Processing',
    description: 'Our experienced visa specialists will assist you in preparing and submitting your visa documents to Embassies and High Commissions, maximizing your chances of a swift and successful visa outcome.',
    pointHeading: 'Services Provided:',
    p1: "Comprehensive guidance on visa documentation",
    p2: 'Exceptional track record of visa approvals across various countries',
    p3: 'Practice sessions for visa interviews',
    p4: '',
    image: visaProcessingImg,
    class: 'left',
    background: '#FFFBE5'
  },
  {
    name: 'Education Loan',
    description: 'Accessing an education loan to attend your dream university is now simpler than ever!',
    pointHeading: 'What We Provide:',
    p1: "Educational loans available from over 17 top Banks & NBFCs",
    p2: "Tailored financial planning to match your university's requirements",
    p3: 'Streamlined, hassle-free loan documentation process',
    p4: '',
    image: EducationLoanImg,
    class: '',
    background: 'white'
  },
]






