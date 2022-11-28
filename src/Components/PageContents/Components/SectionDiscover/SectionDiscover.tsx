import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const pic1 = require('./../../../../Assets/Images/HomeDiscover1.webp');
const pic2 = require('./../../../../Assets/Images/HomeDiscover2.webp');
const pic3 = require('./../../../../Assets/Images/HomeDiscover3.webp');

const SectionDiscover: React.FC<{discover1: string, discover2: string, discover3: string}> = ({discover1, discover2, discover3}) => {
  return (
    <div className="section section-discover">
        <div className="strip-bar">
          <span>Discover</span>
        </div>

        <div className="container">
          <div className="item">
            <img src={pic1} alt="" />
            <div className="description">
              <span className="title">
                The Latest World Cup Kits
              </span>
              <p>
                The World Cup 2022 kits are here and there's some absolute beauties in the mix this year...
              </p>
              <div>
                <span className="find-out">
                  Find Out More
                </span>
                <FontAwesomeIcon icon={faArrowRightLong}/>
              </div>

            </div>
          </div>
          <div className="item">
            <img src={pic2} alt="" />
            <div className="description">
              <span className="title">
                Fire Deals!
              </span>
              <p>
                It's that time of year again, Black Friday is here with unmatched prices. Get set for our epic sale...
              </p>
              <div>
                <span className="find-out">
                  Find Out More
                </span>
                <FontAwesomeIcon icon={faArrowRightLong}/>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={pic3} alt="" />
            <div className="description">
              <span className="title">
                A New Age of Originality
              </span>
              <p>
                Puma have enineered their most innovative Football boots yet. Super light-weight and extra durable. Don't miss out on your chance to brab a pair...
              </p>
              <div>
                <span className="find-out">
                  Find Out More
                </span>
                <FontAwesomeIcon icon={faArrowRightLong}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SectionDiscover