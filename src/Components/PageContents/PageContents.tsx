import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StripBar from '../PageContents/Components/StripBar/StripBar';
import Hero from './Components/Hero/Hero';
import SectionCategory from '../PageContents/Components/SectionCategory/SectionCategory';
import SectionNew from '../PageContents/Components/SectionNew/SectionNew';
import SectionBrands from '../PageContents/Components/SectionBrands/SectionBrands';
import SectionDiscover from '../PageContents/Components/SectionDiscover/SectionDiscover';
import SectionStoreInfo from '../PageContents/Components/SectionStoreInfo/SectionStoreInfo';
import HeroTwo from '../PageContents/Components/HeroTwo/HeroTwo';
import HomeSectionCategory from '../../Routes/Home/Components/HomeSectionCategory/HomeSectionCategory';

const PageContents: React.FC<{gender: string | null, hero1: string, hero2: string, hero3: string, category1: string, category2: string, category3: string, new1Pic: string, new1PicHover: string, new2Pic: string, new2PicHover: string, new3Pic: string, new3PicHover: string, new4Pic: string, new4PicHover: string, new5Pic: string, new5PicHover: string, new6Pic: string, new6PicHover: string, new1Price: string, new2Price: string, new3Price: string, new4Price: string, new5Price: string, new6Price: string, new1Title: string, new2Title: string, new3Title: string, new4Title: string, new5Title: string, new6Title: string, heroTwo1: string, heroTwo2: string, heroTwo3: string, brands1:string | null, brands2: string | null, home: boolean}> = ({gender, hero1, hero2, hero3, category1, category2, category3, new1Pic, new1PicHover, new2Pic, new2PicHover, new3Pic, new3PicHover, new4Pic, new4PicHover, new5Pic, new5PicHover, new6Pic, new6PicHover, new1Price, new2Price, new3Price, new4Price, new5Price, new6Price, new1Title, new2Title, new3Title, new4Title, new5Title, new6Title, heroTwo1, heroTwo2, heroTwo3, brands1, brands2, home}) => {

  return (
    <div className='page-contents'>
        {gender ? <StripBar gender={gender}/> : null}

        <Hero hero1={hero1} hero2={hero2} hero3={hero3}/>

        { home ? <HomeSectionCategory/> : <SectionCategory category1={category1} category2={category2} category3={category3}/>}

        <SectionNew new1Pic={new1Pic} new1PicHover={new1PicHover} new2Pic={new2Pic} new2PicHover={new2PicHover} new3Pic={new3Pic} new3PicHover={new3PicHover} new4Pic={new4Pic} new4PicHover={new4PicHover} new5Pic={new5Pic} new5PicHover={new5PicHover} new6Pic={new6Pic} new6PicHover={new6PicHover} new1Price={new1Price} new2Price={new2Price} new3Price={new3Price} new4Price={new4Price} new5Price={new5Price} new6Price={new6Price} new1Title={new1Title} new2Title={new2Title} new3Title={new3Title} new4Title={new4Title} new5Title={new5Title} new6Title={new6Title}/>

        <HeroTwo heroTwo1={heroTwo1} heroTwo2={heroTwo2} heroTwo3={heroTwo3}/>

        { home ? null : <SectionBrands brands1={brands1} brands2={brands2}/>}

        <SectionDiscover discover1={hero1} discover2={hero1} discover3={hero1}/>

        <SectionStoreInfo/>
    </div>
  )
}

export default PageContents