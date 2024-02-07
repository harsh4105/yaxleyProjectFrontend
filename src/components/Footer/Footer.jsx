import React from 'react';
import './Footer.css';
import footerSocialMedia from '../images/footerSocialMedia.png';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-header'>
                Stay updated with Yaxley Global
            </div>
            <div className='footer-search-bar'>
                <input
                    type="text"
                    placeholder="Please enter your email Id"
                />
                <button type="submit">Subscribe Now</button>
            </div>
            <div className='hr-line'></div>

            <div className='footer-links-section'>
                <div className='section1 sections'>
                    <h1>About YaxleYGlobal</h1>
                    <p>We have made it easier for every student who aspires to do Overseas
                        Education. Working with around 500 Universities aro the Globe to
                        fulfil everyones Carrer goals.
                    </p>
                </div>
                <div className='section2 sections'>
                    <h1>Service</h1>
                    <ul>
                        <li>Counselling</li>
                        <li>Admission</li>
                        <li>Scholarship's</li>
                        <li>Visa Processing</li>
                        <li>Education Loan</li>
                    </ul>
                </div>
                <div className='section3 sections'>
                    <h1>Important Links</h1>
                    <ul>
                        <li>Country Information</li>
                        <li>Course Search</li>
                        <li>Blogs</li>
                        <li>Social Media Landing Page</li>
                        <li>Test Prep</li>
                    </ul>
                </div>
                <div className='section4 sections'>
                    <h1>Stay Connected</h1>
                    <p>if you want know more about web development, stay connected to our handles.</p>
                    <img src={footerSocialMedia}/>
                </div>
            </div>
            
            <div className='hr-line hr-position'></div> 
  
           <div className='copy-right-section'>
                <span>copyright © All Rights Reserved | Yaxley Global Pvt Ltd.</span>
                <ul>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Cookies</li>
                    <li>Disclaimer</li>
                </ul>
           </div>
        </div>
    );
};

export default Footer;
