import React from 'react'

const pic1 = require('./../../../../Assets/Images/hero1mens.webp');

const Dresses: React.FC = () => {
  return (
    <ul className='categories-box-inner'>
        <li className="categories-box-section">
            <span>Brands</span>
            <ul>
                <li>Nike</li>
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
        </li>
        <li className="categories-box-section">
            <span>Brands</span>
            <ul>
                <li>Nike</li>
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
        </li>
        <li className="categories-box-section">
            <span>Find Your Size</span>
            <ul>
                <li>Extra Small</li>
                <li>Small</li>
                <li>Medium</li>
                <li>Large</li>
                <li>Extra Large</li>
                <li>Tall + Skinny</li>
            </ul>
        </li>
        <li className="categories-box-section">
            <ul className='pic-rows'>
                <li><img src={pic1} alt="" /></li>
                <li><img src={pic1} alt="" /></li>
                <li><img src={pic1} alt="" /></li>
            </ul>
        </li>
    </ul>
  )
}

export default Dresses