import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <div className="Footer-container">
            <div className='footer-logo'>
                <img className='logo-gray' src="/img/Logo-gray.png" alt="Logo-gray.png" />
            </div>
            <div className='footer-address'>
                Contact : 슼카이브@ac.kr
            </div>
            <div className='footer-contact'>
                ⓒ 슼카이브.All rights reserved.
            </div>
        </div>
    );
};

export default Footer;