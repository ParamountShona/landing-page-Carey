import React from 'react';
import './Banner.css';
import banner-picture

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Welcome to Our Site!</h1>
                <p>Your one-stop solution for all your legal needs.</p>
                <div className="button-container">
                    <button className="banner-button">Schedule a Consultation</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
