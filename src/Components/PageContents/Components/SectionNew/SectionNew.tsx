import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const SectionNew: React.FC<{new1Pic: string, new1PicHover: string, new2Pic: string, new2PicHover: string, new3Pic: string, new3PicHover: string, new4Pic: string, new4PicHover: string, new5Pic: string, new5PicHover: string, new6Pic: string, new6PicHover: string, new1Price: string, new2Price: string, new3Price: string, new4Price: string, new5Price: string, new6Price: string, new2Title: string,  new1Title: string,  new3Title: string,  new4Title: string,  new5Title: string,  new6Title: string }> = ({new1Pic, new1PicHover, new2Pic, new2PicHover, new3Pic, new3PicHover, new4Pic, new4PicHover, new5Pic, new5PicHover, new6Pic, new6PicHover, new1Price, new2Price, new3Price, new4Price, new5Price, new6Price, new1Title, new2Title, new3Title, new4Title, new5Title, new6Title}) => {

  const responsiveNewIn = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };


  const HandleHover = () =>
  {

  }

  return (
    <div className="section section-new">
        <div className="strip-bar">
          <span>New In</span>
          <span className='all'>Shop All<FontAwesomeIcon icon={faArrowRightLong}/></span>
        </div>

        <div className="container">
          <Carousel className='carousel' responsive={responsiveNewIn} swipeable={true} infinite={true}>
            <div className="item">
              <img src={new1Pic} className='title' alt="" onMouseEnter={e => (e.currentTarget.src = new1PicHover)} onMouseLeave={e => (e.currentTarget.src = new1Pic)}/>
              <span className='price'>{new1Price}</span>
              <span className='title'>{new1Title}</span>
            </div>
            <div className="item">
              <img src={new2Pic} alt="" onMouseEnter={e => (e.currentTarget.src = new2PicHover)} onMouseLeave={e => (e.currentTarget.src = new2Pic)}/>
              <span className='price'>{new2Price}</span>
              <span className='title'>{new2Title}</span>
            </div>
            <div className="item">
              <img src={new3Pic} alt="" onMouseEnter={e => (e.currentTarget.src = new3PicHover)} onMouseLeave={e => (e.currentTarget.src = new3Pic)}/>
              <span className='price'>{new3Price}</span>
              <span className='title'>{new3Title}</span>
            </div>
            <div className="item">
              <img src={new4Pic} alt="" onMouseEnter={e => (e.currentTarget.src = new4PicHover)} onMouseLeave={e => (e.currentTarget.src = new4Pic)}/>
              <span className='price'>{new4Price}</span>
              <span className='title'>{new4Title}</span>
            </div>
            <div className="item">
              <img src={new5Pic} alt="" onMouseEnter={e => (e.currentTarget.src = new5PicHover)} onMouseLeave={e => (e.currentTarget.src = new5Pic)}/>
              <span className='price'>{new5Price}</span>
              <span className='title'>{new5Title}</span>
            </div>
            <div className="item">
              <img src={new6Pic} alt="" onMouseEnter={e => (e.currentTarget.src = new6PicHover)} onMouseLeave={e => (e.currentTarget.src = new6Pic)}/>
              <span className='price'>{new6Price}</span>
              <span className='title'>{new6Title}</span>
            </div>
          </Carousel>
        </div>
    </div>
  )
}

export default SectionNew