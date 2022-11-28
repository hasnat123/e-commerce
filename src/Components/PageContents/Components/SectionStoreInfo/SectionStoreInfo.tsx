import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const StoreInfo1 = require('../../../../Assets/Images/StoreInfo1.png');
const StoreInfo2 = require('../../../../Assets/Images/StoreInfo2.webp');
const StoreInfo3 = require('../../../../Assets/Images/StoreInfo3.webp');


const SectionStoreInfo: React.FC = () => {
  return (
    <div className="section section-store-info">
      <div className="container">
          <div className="item">
            <div className="inner">
              <span className='title'>Gift Cards</span>
              <img src={StoreInfo1} alt="" />
              <span>Save up to £50</span>
              <p>Purchase a gift card for chirstmas. Available in all stores. The perfect holiday present.</p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <span className='title'>Our Stores</span>
              <img src={StoreInfo2} alt="" />
              <p>Find the stores nearest to you and their opening times. Simply enter your postcode below</p>
              <div className="navbar-search-container">
                <input type="text" className="navbar-search" placeholder="Enter Postcode..."/>
                <button className="navbar-search-btn">
                  <FontAwesomeIcon icon={faSearch}/>
                </button>
              </div>
            </div>

          </div>
          <div className="item">
            <div className="inner">
              <span className='title'>Get The App</span>
              <img src={StoreInfo3} alt="" />
              <p>Download our app to get access to exclusive offers and discounts. Shop the latest products on the go</p>
            </div>

          </div>
      </div>
    </div>
  )
}

export default SectionStoreInfo