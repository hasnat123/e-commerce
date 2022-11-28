import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer>
        <div className="inner">
            <div className="footer-section">
                <ul>
                    <span>Help & Information</span>
                    <li>FAQ</li>
                    <li>Track Order</li>
                    <li>Delivery & Returns</li>
                    <li>Find Nearby Stores</li>
                    <li>Size Guides</li>
                    <li>Student Discount</li>
                </ul>
            </div>
            <div className="footer-section">
                <ul>
                    <span>About Us</span>
                    <li>Who We Are</li>
                    <li>Contact Information</li>
                    <li>Careers & Oppertunities</li>
                </ul>
            </div>
            <div className="footer-section">
                <ul>
                    <span>More From XD</span>
                    <li>Mobile App</li>
                    <li>XD Marketplace</li>
                    <li>Gift Vouchers</li>
                    <li>Black Friday Deals</li>
                </ul>
            </div>
            <div className="footer-section">
                <ul>
                    <span>Legal</span>
                    <li>Terms & Conditions</li>
                    <li>Accessibility</li>
                    <li>Privacy & Cookies</li>
                    <li>Cookie Settings</li>
                    <li>Site Map</li>
                </ul>
            </div>
        </div>
        <div id="footer-bar">
            Copyright © 2022 XD All rights reserved.
        </div>

    </footer>
  )
}

export default Footer