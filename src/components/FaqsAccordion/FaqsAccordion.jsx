import React, { useState } from 'react';
import './FaqsAccordion.css';

const FaqsAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="accordion">
            {sections.map((section, index) => (
                <div className="accordion-section" key={index}>
                    <div className="accordion-header" onClick={() => handleToggle(index)}>
                        <h2>{section.heading}</h2>
                        {
                            activeIndex === index ? <span className='arrow'>x</span> : <span className='arrow'>+</span>
                        }
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content">
                            <p>{section.description}</p>
                        </div>
                    )}
                </div>
            ))}
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
