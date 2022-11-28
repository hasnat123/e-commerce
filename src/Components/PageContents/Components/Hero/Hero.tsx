import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const Hero: React.FC<{ hero1: string, hero2: string, hero3: string }> = ({ hero1, hero2, hero3 }) => {

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
    <div className="hero">
      <Carousel className='carousel' responsive={responsiveHero} swipeable={true} infinite={true} showDots={true}>
        <img src={hero1} alt="hero-one" />
        <img src={hero2} alt="hero-two" />
        <img src={hero3} alt="hero-three" />
      </Carousel>
    </div>
  )
}

export default Hero