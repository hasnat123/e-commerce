import React from 'react'
const pic1 = require('./../../../../Assets/Images/HomeCategoryMens.webp');
const pic2 = require('./../../../../Assets/Images/HomeCategoryWomens.webp');


const HomeSectionCategory: React.FC = () => {
  return (
    <div className="section section-home-category">
        <div className="strip-bar">
          <span>Shop By Category</span>
        </div>

        <div className="container">
          <div className="item">
            <img src={pic1} alt="" />
            <div className="inner">
              <div className="title">
                <span>Shop Men's</span>
              </div>
              <ul>
                <li>Men's Clothing</li>
                <li>Men's Footwear</li>
                <li>Men's Accessories</li>
              </ul>
            </div>
          </div>

          <div className="item">
            <img src={pic2} alt="" />
            <div className="inner">
              <span>Shop Women's</span>
              <ul>
                <li>Women's Clothing</li>
                <li>Women's Footwear</li>
                <li>Women's Accessories</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeSectionCategory