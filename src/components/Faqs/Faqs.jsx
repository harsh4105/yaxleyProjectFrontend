import React from "react";
import './Faqs.css';
const Faqs = () => {
    return (
        <div className="faqs-section">
            <h1>FAQs</h1>
            <p>Explore the heartwarming and inspiring experiences shared by our valued counts</p>
            <div className='faqs-left-right-section'>
                <div className="faqs-left">
                    <ul className="faqs-links">
                        <li className="faqs-item">
                            General
                        </li>
                        <li className="faqs-item">
                            Admission
                        </li>
                        <li className="faqs-item">
                            Event
                        </li>
                        <li className="faqs-item">
                            Courses
                        </li>
                        <li className="faqs-item">
                            Services
                        </li>
                    </ul>
                </div>
                <div className="faqs-right">
                    <div className="faqs-choice-special">
                        <h3>How do I register? <button>X</button></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    </div>
                    <hr />
                    <div className="faqs-choice">
                        <h3>Lorem ipsum dolor sit amet, consectetur consectetur adipiscing elit, sed do eiusmod adipiscing elit?</h3>
                        <button>+</button>
                    </div>
                    <hr />
                    <div className="faqs-choice">
                        <h3>Sed do eiusmod tempor incididunt ut labore et dolore ma</h3>
                        <button>+</button>
                    </div>
                    <hr />
                    <div className="faqs-choice">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing?</h3>
                        <button>+</button>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Faqs;