import React, { useEffect, useState } from 'react';
import './FaqsAccordion.css';
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

const FaqsAccordion = (prop) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const [home, setHome] = useState(false);
    const [homeData, setHomeData] = useState(false);

    useEffect(() => {
        if (prop && prop.serviceData && prop.serviceData.length > 0 && prop.serviceData[0].page === "service") {
            setHome(true);
            setHomeData(prop.serviceData)
        }
    }, [prop]);

    return (
        <div className="accordion">
            {home && (
                <div>
                    {homeData.map((section, index) => (
                        <div className="accordion-section" key={index}>

                            <div className="accordion-header" onClick={() => handleToggle(index)}>
                                <h2 className='!text-[16px] w-[90%] font-semibold Raleway_Bold' style={{ marginTop: "-12px" }} >{section.inputValue}</h2>
                                {
                                    activeIndex === index ? <span className='arrow'><MdOutlineCancel /></span> : <span className='arrow'><AiOutlinePlus /></span>
                                }
                            </div>
                            {activeIndex === index && (
                                <div className="accordion-content ">
                                    <p className='text-[#727272] Raleway_Bold'>{section.textAreaValue}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )

            }

        </div>
    );
};

const sections = [
    {
        heading: 'How do I register?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
    {
        heading: 'Lorem ipsum dolor sit amet, consectetur consectetur adipiscing elit, sed do eiusmod adipiscing elit?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
    {
        heading: 'Sed do eiusmod tempor incididunt ut labore et dolore ma?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
    {
        heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
];



export default FaqsAccordion;
