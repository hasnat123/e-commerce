import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const SectionCategory: React.FC<{category1: string, category2: string, category3: string}> = ({category1, category2, category3}) => {
  return (
    <div className="section section-category">
        <div className="strip-bar">
          <span>Shop By Category</span>
          <span className='all'>Shop All<FontAwesomeIcon icon={faArrowRightLong}/></span>
        </div>

        <div className="container">
          <div className="item">
            <div className="image-container">
              <img src={category1} alt="" />
            </div>
            <div className='arrow-container'>
              <span>Shop Clothing</span>
              <FontAwesomeIcon icon={faArrowRightLong}/>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={category2} alt="" />
            </div>
            <div className='arrow-container'>
              <span>Shop Footwear</span>
              <FontAwesomeIcon icon={faArrowRightLong}/>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={category3} alt="" />
            </div>
            <div className='arrow-container'>
              <span>Shop Accessories</span>
              <FontAwesomeIcon icon={faArrowRightLong}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SectionCategory