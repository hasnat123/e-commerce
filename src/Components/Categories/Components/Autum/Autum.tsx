import React from 'react'

const pic1 = require('./../../../../Assets/Images/hero1mens.webp');

const Autum: React.FC = () => {
  return (
    <ul className='categories-box-inner'>
        <li className="categories-box-section">
            <span>Shop By Product</span>
            <ul>
                <li>Winter Fits</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Suits & Blazers</li>
                <li>Cargo Trousers</li>
                <li>Coats & Jackets</li>
                <li>Jumpers & Cardigans</li>
                <li>Boots</li>
                <li>Jeans</li>
                <li>Timberland</li>
                <li>Joggers</li>
            </ul>
        </li>
        <li className="categories-box-section">
            <span>Jackets & Coats</span>
            <ul>
                <li>View All</li>
                <li>Gilets</li>
                <li>Puffer Jackets</li>
                <li>Leather Jackets</li>
                <li>Varsity Jackets</li>
                <li>Bomber Jackets</li>
                <li>Parka Coats</li>
                <li>Trench Coats</li>
                <li>Overcoats</li>
            </ul>
        </li>
        <li className="categories-box-section">
            <span>Tops</span>
            <ul>
                <li>View All</li>
                <li>Fleeces</li>
                <li>Sweatshirts</li>
                <li>Check Shirts</li>
                <li>Cable Jumpers</li>
                <li>Hoodies</li>
                <li>Long Sleeve Polos</li>
                <li>Long Sleeve T-Shirts</li>
                <li>Roll Neck Jumpers</li>
                <li>Zip Up Hoodies</li>

            </ul>
        </li>
        <li className="categories-box-section">
            <span>Shoes & Accessories</span>
            <ul>
                <li>View All Shoes</li>
                <li>Boots</li>
                <li>Trainers</li>
                <li>Scarves</li>
                <li>Supreme</li>
                <li>Gloves</li>
                <li>Beanies</li>
            </ul>
        </li>
    </ul>
  )
}

export default Autum