import React from 'react'

const pic1 = require('./../../../../Assets/Images/Shoes1Mens.webp');
const pic2 = require('./../../../../Assets/Images/Shoes2Mens.webp');

const Shoes: React.FC = () => {
  return (
    <div className='categories-box-inner shoes'>
        <div className="categories-box-section">
            <span>Shop By Product</span>
            <ul>
                <li>View All</li>
                <li>Trainers</li>
                <li>Boots</li>
                <li>Loafers</li>
                <li>Sandals</li>
                <li>Shoes</li>
                <li>Slippers</li>
                <li>Smart Shoes</li>
                <li>Sports Trainers</li>
            </ul>
        </div>
        <div className="categories-box-section">
            <span>Popular Brands</span>
            <ul>
                <li>Adidas</li>
                <li>The North Face</li>
                <li>Umbro</li>
                <li>Supreme</li>
                <li>Puma</li>
                <li>Gym Shark</li>
                <li>Calvin Klein</li>
                <li>Timberland</li>
                <li>Jordan</li>
            </ul>
        </div>
        <div className="categories-box-section half">
            <ul className='picture-container'>
                <li><img src={pic1} alt="" /><span>Nike Air</span></li>
                <li><img src={pic2} alt="" /><span>Adidas Originals</span></li>
            </ul>
        </div>
    </div>
  )
}

export default Shoes