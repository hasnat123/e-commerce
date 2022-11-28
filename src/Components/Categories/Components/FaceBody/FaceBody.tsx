import React from 'react'

const pic1 = require('./../../../../Assets/Images/FaceBody1Mens.webp');
const pic2 = require('./../../../../Assets/Images/FaceBody2Mens.webp');
const pic3 = require('./../../../../Assets/Images/FaceBody3Mens.webp');
const pic4 = require('./../../../../Assets/Images/FaceBody4Mens.webp');


const FaceBody: React.FC = () => {
  return (
    <ul className='categories-box-inner'>
        <li className="categories-box-section">
            <span>Shop By Product</span>
            <ul>
                <li>View All</li>
                <li>Body Care</li>
                <li>Fragrances</li>
                <li>Gifts</li>
                <li>Hair Care</li>
                <li>Shaving & Grooming</li>
                <li>Skin Care</li>
                <li>Suncare & Tanning</li>
                <li>Tools & Accessories</li>
            </ul>
        </li>
        <li className="categories-box-section">
            <span>Brands</span>
            <ul>
                <li>Bulldog</li>
                <li>CeraVe</li>
                <li>Clinnique</li>
                <li>Harry's</li>
                <li>L'Oreal Men Expert</li>
                <li>Lab Series</li>
                <li>Murdock London</li>
                <li>Revolution Man</li>
                <li>The Ordinary</li>
            </ul>
        </li>
        <li className="categories-box-section">
            <ul className='pic-rows-large'>
                <li><img src={pic1} alt="" /></li>
                <li><img src={pic2} alt="" /></li>
            </ul>
        </li>
        <li className="categories-box-section">
            <ul className='pic-rows-large'>
                <li><img src={pic3} alt="" /></li>
                <li><img src={pic4} alt="" /></li>
            </ul>
        </li>
    </ul>
  )
}

export default FaceBody