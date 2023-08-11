import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact-info">
                <p>123 Main St., Annapolis, MD 21401</p>
                <p>(410) 123-4567</p>
            </div>
            <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
            </div>
            <div className="copyright">
                <p>&copy; 2023 Clem Designs</p>
            </div>
        </footer>
    );
}

export default Footer;
