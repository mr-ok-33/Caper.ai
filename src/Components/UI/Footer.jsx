import React from 'react'
import footerLogo from '../../Assests/websiteLogo.png';
import {NavLink} from 'react-router-dom';
function Footer() {
    return (
    <div className="footer-container">
        <div className="first-ctr">
            <div className="image">
                <NavLink to="/">
                <img src={footerLogo} alt="" />
                </NavLink>
                
            </div>

            <div className="first-list">
                <p>Comapany</p>
                <ul>
                    <li>Caper Smart Cart</li>
                    <li>For Retailers</li>
                    <li>Resources</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Careers</li>
                    <li>Careers in China</li>
                </ul>
            </div>
            
            <div className="second-list">
                <p>Legal</p>
                <ul>
                    <li>Privacy</li>
                    <li>Terms of Service</li>
                    <li>Supplier Transparency Statement</li>
                    <li>Sustainabillity</li>
                </ul>
            </div>
        </div>
        <div className="second-ctr">
            <div className="linkDln">
                <img src="" alt="ldn" />
            </div>

            <div className="text-first">
                <p>@2025 Caper</p>
            </div>

            <div className="text-second">
                <p>Disclaimer: all graphics, visuals and illustrations are illustrative only and are subject to change.</p>
            </div>
        </div>
    </div>
    )
}

export default Footer



