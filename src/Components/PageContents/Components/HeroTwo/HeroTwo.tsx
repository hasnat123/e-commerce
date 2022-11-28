import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HeroTwo: React.FC<{heroTwo1: string, heroTwo2: string, heroTwo3: string}> = ({heroTwo1, heroTwo2, heroTwo3}) => {

    const responsiveHero = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className="section">
        <div className="hero">
          <Carousel className='carousel' responsive={responsiveHero} swipeable={true} infinite={true} showDots={true}>
            <img src={heroTwo1} alt="hero-one" />
            <img src={heroTwo2} alt="hero-one" />
            <img src={heroTwo3} alt="hero-two" />
          </Carousel>
        </div>
    </div>
  )
}

export default HeroTwo