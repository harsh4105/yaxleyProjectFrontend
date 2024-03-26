import { React, useState } from "react";
import { useEffect } from "react";
import './Faqs.css';
import FaqsAccordion from "../FaqsAccordion/FaqsAccordion";
const Faqs = () => {
    const [contactUsData, setContactUsData] = useState([]);

    useEffect(() => {
        fetchContactUsData();
    }, []);

    
    const fetchContactUsData = async () => {
        try {
            const response = await fetch('http://13.127.109.224:4000/dashboardContactUs');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setContactUsData(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const GeneralFaqs = () => {
        console.log("General");
    }
    const AdmissionFaqs = () => {
        console.log("AdmissionFaqs");
    }
    const EventFaqs = () => {
        console.log("EventFaqs");
    }
    const CoursesFaqs = () => {
        console.log("CoursesFaqs");
    }
    const ServicesFaqs = () => {
        console.log("ServicesFaqs");
    }
    return (
        <div className="">
            <p className="text-5xl font-semibold text-[#353535] Raleway_Bold text-center mt-10">FAQs</p>

            <p className="mt-4 text-[17px] text-gray-600 font-semibold DMSans_Medium w-[40%] m-auto text-center">Explore the heartwarming and inspiring experiences shared by our valued counts</p>
            <div className='flex justify-center gap-20 mt-10'>
                <div className="">

                    <p className="font-semibold text-[#FF8A00] p-4 cursor-pointer	bg-white hover:bg-[#FF66121A] text-[30px] rounded-full text-center" onCpck={GeneralFaqs}>
                        General
                    </p>
                    <p className="font-semibold text-[#FF8A00] p-4 cursor-pointer bg-white hover:bg-[#FF66121A] text-[30px] rounded-full text-center" onCpck={AdmissionFaqs}>
                        Admission
                    </p>
                    <p className="font-semibold text-[#FF8A00] p-4 cursor-pointer bg-white hover:bg-[#FF66121A] text-[30px] rounded-full text-center" onCpck={EventFaqs}>
                        Event
                    </p>
                    <p className="font-semibold text-[#FF8A00] p-4 cursor-pointer bg-white hover:bg-[#FF66121A] text-[30px] rounded-full text-center" onCpck={CoursesFaqs}>
                        Courses
                    </p>
                    <p className="font-semibold text-[#FF8A00] p-4 cursor-pointer bg-white hover:bg-[#FF66121A] text-[30px] rounded-full text-center" onCpck={ServicesFaqs}>
                        Services
                    </p>
                </div>
                <div className="faqs-right">
                    <FaqsAccordion contactUsData={contactUsData} />
                </div>
            </div>
        </div>
    )
}

export default Faqs;