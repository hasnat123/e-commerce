import React from 'react'
import Categories from '../../Components/Categories/Categories'
import PageContents from '../../Components/PageContents/PageContents';
const Hero1 = require('./../../Assets/Images/hero1mens.webp');
const Hero2 = require('./../../Assets/Images/hero2mens.webp');
const Hero3 = require('./../../Assets/Images/hero3mens.webp');
const Category1 = require('./../../Assets/Images/Category1Mens.webp');
const Category2 = require('./../../Assets/Images/category2mens.webp');
const Category3 = require('./../../Assets/Images/category3mens.webp');

const new1Pic = require('./../../Assets/Images/HomeNewIn1.webp');
const new2Pic = require('./../../Assets/Images/HomeNewIn2.webp');
const new3Pic = require('./../../Assets/Images/HomeNewIn3.webp');
const new4Pic = require('./../../Assets/Images/HomeNewIn4.webp');
const new5Pic = require('./../../Assets/Images/HomeNewIn5.webp');
const new6Pic = require('./../../Assets/Images/HomeNewIn6.webp');

const heroTwo1 = require('./../../Assets/Images/MensHeroTwo1.webp');
const heroTwo2 = require('./../../Assets/Images/MensHeroTwo2.webp');
const heroTwo3 = require('./../../Assets/Images/MensHeroTwo3.webp');


const WomensPage = () => {
  return (
    <div className='womens-page'>
      <Categories dresses={'Dresses'}/>
      <div className="page-inner">
        <PageContents gender={'Women'} hero1={Hero1} hero2={Hero2} hero3={Hero3} category1={Category1} category2={Category2} category3={Category3} new1Pic={new1Pic} new1PicHover={new1Pic} new2Pic={new2Pic} new2PicHover={new2Pic} new3Pic={new3Pic} new3PicHover={new3Pic} new4Pic={new4Pic} new4PicHover={new4Pic} new5Pic={new5Pic} new5PicHover={new5Pic} new6Pic={new6Pic} new6PicHover={new6Pic} new1Price={"£50"} new2Price={"£50"} new3Price={"£50"} new4Price={"£50"} new5Price={"£50"} new6Price={"£50"} new1Title={"Nike"} new2Title={"Nike"} new3Title={"Nike"} new4Title={"Nike"} new5Title={"Nike"} new6Title={"Nike"} heroTwo1={heroTwo1} heroTwo2={heroTwo2} heroTwo3={heroTwo3} brands1={heroTwo1} brands2={heroTwo1} home={false}/>
      </div>
    </div>
  )
}

export default WomensPage