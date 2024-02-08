import React from "react";
import './ImportantLinks.css';
import ImportantLinksHeadingImg from '../images/ImportantLinksHeadingImg.png';
import star from '../images/star.png';


const ImportantLinks = () => {
    return (
        <div className="ImportantLinks-section">
            <div className="ImportantLinks-Heading">
                <img src={ImportantLinksHeadingImg} alt="ImportantLinksHeadingImg" />
            </div>
            <div className="ImportantLinks-contain-section">
                <div>
                    <img src={star} alt="star-img" />
                    <p>Sed ut perspiciatis unde omnis iste natus</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div>
                    <img src={star} alt="star-img" />
                    <p>Sed ut perspiciatis unde omnis iste natus</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div>
                    <img src={star} alt="star-img" />
                    <p>Sed ut perspiciatis unde omnis iste natus</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div>
                    <img src={star} alt="star-img" />
                    <p>Sed ut perspiciatis unde omnis iste natus</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <span>More Universities</span>
        </div>
    )
}

export default ImportantLinks;