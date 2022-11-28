import React from 'react'

const pic1 = require('./../../../../Assets/Images/Sportswear2Mens.webp');
const pic2 = require('./../../../../Assets/Images/Sportswear1Mens.webp');
const pic3 = require('./../../../../Assets/Images/Sportswear3Mens.webp');

const SportsWear: React.FC = () => {
  return (
    <ul className='categories-box-inner'>
        <li className="categories-box-section">
            <span>Shop By Product</span>
            <ul>
                <li>View All</li>
                <li>Shorts</li>
                <li>Tops</li>
                <li>Accessories</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Joggers</li>
                <li>Trainers</li>
                <li>Trousers & Tights</li>
            </ul>
        </li>
        <li className="categories-box-section">
            <span>Shop By Activity</span>
            <ul>
                <li>Gym & Training</li>
                <li>Football</li>
                <li>Lifestyle</li>
                <li>Outdoors</li>
                <li>Running</li>
                <li>Ski & Snnowboard</li>
            </ul>
        </li>
        <li className="categories-box-section">
            <span>Popular Brands</span>
            <ul>
                <li>Nike</li>
                <li>Adidas</li>
                <li>Gym Shark</li>
                <li>The North Face</li>
                <li>New Balance</li>
                <li>Umbro</li>
                <li>Puma</li>
                <li>Reebok</li>
            </ul>
        </li>
        <li className="categories-box-section">
            <ul className='pic-rows'>
                <li><img src={pic1} alt="" /></li>
                <li><img src={pic2} alt="" /></li>
                <li><img src={pic3} alt="" /></li>
            </ul>
        </li>
    </ul>
  )
}

export default SportsWear