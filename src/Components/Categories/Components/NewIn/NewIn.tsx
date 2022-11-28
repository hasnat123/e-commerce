import React from 'react'

const pic1 = require('./../../../../Assets/Images/NewIn3Mens.webp');
const pic2 = require('./../../../../Assets/Images/NewIn2Mens.webp');
const pic3= require('./../../../../Assets/Images/NewIn1Mens.webp');



const NewIn: React.FC = () => {
  return (
    <div className="categories-box-inner">
        <div className="categories-box-section one-quarter">

            <span>New Products</span>
            <ul>
                <li>View All</li>
                <li>Clothing</li>
                <li>Shoes</li>
                <li>Accessories</li>
                <li>Face + Body</li>
                <li>Activewear</li>
                <li>Gifts</li>
            </ul>

        </div>

        <div className="categories-box-section three-quarters">
            <span>New Edits</span>
            <ul className='picture-container'>
                <li><img src={pic1} alt="" /><span>Winter Selection</span></li>
                <li><img src={pic2} alt="" /><span>Men's Fitness</span></li>
                <li><img src={pic3} alt="" /><span>Suits & Tailoring</span></li>
            </ul>
        </div>
    </div>
  )
}

export default NewIn