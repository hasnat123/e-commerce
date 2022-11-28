import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const SectionBrands: React.FC<{brands1: string | null, brands2: string | null}> = ({brands1, brands2}) => {
  return (
    <div className="section section-brands">
        <div className="container">
            <div className="item">
              <div className="image-container">
                {brands1 ? <img src={brands1} alt="" /> : null}
              </div>
              <div>
                <span>The North Face Jackets</span>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </div>
            </div>
            <div className="item">
              <div className="image-container">
                {brands2 ? <img src={brands2} alt="" /> : null}
              </div>
              <div>
                <span>Nike Air Force Trainers</span>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </div>
            </div>
        </div>
    </div>
  )
}

export default SectionBrands