import React from 'react'

const pic1 = require('./../../../../Assets/Images/Accessories1Mens.webp');

const Accessories: React.FC = () => {
  return (
    <ul className='categories-box-inner'>
        <li className="categories-box-section">
            <span>Shop By Products</span>
            <ul>
                <li>View All</li>
                <li>Beanies</li>
                <li>Caps & Hats</li>
                <li>Scarves</li>
                <li>Gloves</li>
                <li>Belts</li>
                <li>Face Coverings</li>
                <li>Gifts</li>
                <li>Sunglasses</li>
                <li>Ties</li>
                <li>Watches</li>
            </ul>
        </li>
        <li className="categories-box-section">
            <span>Jewellery</span>
            <ul>
                <li>View All</li>
                <li>Necklaces</li>
                <li>Rings</li>
                <li>Bracelets</li>
                <li>Earrings</li>
                <li>Cufflinks</li>
            </ul>
        </li>
        <li className="categories-box-section">
            <span>Bags</span>
            <ul>
                <li>View All</li>
                <li>Duffle Bags</li>
                <li>Bum Bags</li>
                <li>Shopper Bags</li>
                <li>Backpakcs</li>
                <li>Wallets</li>
            </ul>
        </li>
        <li className="categories-box-section">
            <ul className='pic-single'>
                <li><img src={pic1} alt="" /></li>
            </ul>
        </li>
    </ul>
  )
}

export default Accessories