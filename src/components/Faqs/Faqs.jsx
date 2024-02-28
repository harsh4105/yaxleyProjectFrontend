import { React, useState } from "react";
import { useEffect } from "react";
import './Faqs.css';
import FaqsAccordion from "../FaqsAccordion/FaqsAccordion";
const Faqs = () => {
    const [homeData, setHomeData] = useState([]);
    const [serviceData, setServiceData] = useState([]);
    const [contactUsData, setContactUsData] = useState([]);
    const [countryInfoData, setCountryInfoData] = useState([]);
    const [testPrepData, setTestPrepData] = useState([]);
    const [eventsData, setEventsData] = useState([]);
    useEffect(() => {
        fetchHomeData();
        fetchServiceData();
        fetchContactUsData();
        fetchCountryData();
        fetchTestPrepData();
        fetchEventsData();
    },[]);
    
    const fetchHomeData = async () => {
        try {
            const response = await fetch('http://localhost:4000/dashboardHome');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setHomeData(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    const fetchServiceData = async () => {
        try {
            const response = await fetch('http://localhost:4000/dashboardServices');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setServiceData(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    const fetchContactUsData = async () => {
        try {
            const response = await fetch('http://localhost:4000/dashboardContactUs');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setContactUsData(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    const fetchCountryData = async () => {
        try {
            const response = await fetch('http://localhost:4000/dashboardCountryInfoFaqs');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCountryInfoData(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    const fetchTestPrepData = async () => {
        try {
            const response = await fetch('http://localhost:4000/dashboardTestPrep');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTestPrepData(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    const fetchEventsData = async () => {
        try {
            const response = await fetch('http://localhost:4000/dashboardEvents');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setEventsData(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    const GeneralFaqs=()=>{
        console.log("General");
    }
    const AdmissionFaqs=()=>{
        console.log("AdmissionFaqs");
    }
    const EventFaqs=()=>{
        console.log("EventFaqs");
    }
    const CoursesFaqs=()=>{
        console.log("CoursesFaqs");
    }
    const ServicesFaqs=()=>{
        console.log("ServicesFaqs");
    }
    return (
        <div className="faqs-section">
            <h1>FAQs</h1>
            <p>Explore the heartwarming and inspiring experiences shared by our valued counts</p>
            <div className='faqs-left-right-section'>
                <div className="faqs-left">
                    <ul className="faqs-links">
                        <li className="faqs-item" onClick={GeneralFaqs}>
                            General
                        </li>
                        <li className="faqs-item" onClick={AdmissionFaqs}>
                            Admission
                        </li>
                        <li className="faqs-item" onClick={EventFaqs}>
                            Event
                        </li>
                        <li className="faqs-item" onClick={CoursesFaqs}>
                            Courses
                        </li>
                        <li className="faqs-item" onClick={ServicesFaqs}>
                            Services
                        </li>
                    </ul>
                </div>
                <div className="faqs-right">
                    <FaqsAccordion />
                </div>
            </div>
        </div>
    )
}

export default Faqs;