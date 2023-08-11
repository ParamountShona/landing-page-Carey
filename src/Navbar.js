// JavaScript source code
import React from 'react';
import logo from './images/logo1.png';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f8f9fa' }}>
            <div>
                {/* You can replace # with the actual link to your logo */}
                <a href="#"><img src={logo} alt="Logo" style={{ height: '50px' }} /></a>
            </div>
            <div>
                {/* You can replace # with actual links and Link Name with actual link names */}
                <a href=".about-section" style={{ margin: '0 10px' }}>About</a>
                <a href="#contact-section" style={{ margin: '0 10px' }}>Contact Me</a> {/*create the Contact section and the anchor tag takes it to the contact form, near the chatbox.uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu*/}
                {//<a href="#" style={{ margin: '0 10px' }}>Link Name 3</a>}
            </div>
        </nav>
    );
}

export default Navbar;
