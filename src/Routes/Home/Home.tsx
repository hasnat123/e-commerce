import React from 'react'
import PageContents from '../../Components/PageContents/PageContents';

const Hero1 = require('./../../Assets/Images/HomeHero1.webp');
const Hero2 = require('./../../Assets/Images/HomeHero2.webp');
const Hero3 = require('./../../Assets/Images/HomeHero3.webp');

const Category1 = require('./../../Assets/Images/Category1Mens.webp');
const Category2 = require('./../../Assets/Images/category2mens.webp');
const Category3 = require('./../../Assets/Images/category3mens.webp');

const new1Pic = require('./../../Assets/Images/HomeNewIn1.webp');
const new2Pic = require('./../../Assets/Images/HomeNewIn2.webp');
const new3Pic = require('./../../Assets/Images/HomeNewIn3.webp');
const new4Pic = require('./../../Assets/Images/HomeNewIn4.webp');
const new5Pic = require('./../../Assets/Images/HomeNewIn5.webp');
const new6Pic = require('./../../Assets/Images/HomeNewIn6.webp');

const new1PicHover = require('./../../Assets/Images/HomeNewIn1Hover.webp');
const new2PicHover = require('./../../Assets/Images/HomeNewIn2Hover.webp');
const new3PicHover = require('./../../Assets/Images/HomeNewIn3Hover.webp');
const new4PicHover = require('./../../Assets/Images/HomeNewIn4Hover.webp');
const new5PicHover = require('./../../Assets/Images/HomeNewIn5Hover.webp');
const new6PicHover = require('./../../Assets/Images/HomeNewIn6Hover.webp');


const heroTwo1 = require('./../../Assets/Images/HomeHeroTwo1.webp');
const heroTwo2 = require('./../../Assets/Images/HomeHeroTwo2.webp');
const heroTwo3 = require('./../../Assets/Images/HomeHeroTwo3.webp');

const Home = () => {
  return (
    <div>
      <div className="announcement">
        <span>20% off with student discount</span>
        <span>Free Delivery for orders over £50</span>
        <span>Sign in for exclusive offers!</span>
      </div>
      
        <PageContents gender={null} hero1={Hero1} hero2={Hero2} hero3={Hero3} category1={Category1} category2={Category2} category3={Category3} new1Pic={new1Pic} new1PicHover={new1PicHover} new2Pic={new2Pic} new2PicHover={new2PicHover} new3Pic={new3Pic} new3PicHover={new3PicHover} new4Pic={new4Pic} new4PicHover={new4PicHover} new5Pic={new5Pic} new5PicHover={new5PicHover} new6Pic={new6Pic} new6PicHover={new6PicHover} new1Price={"£24.99"} new2Price={"£39.99"} new3Price={"£49.99"} new4Price={"£89.99"} new5Price={"£14.99"} new6Price={"£39.99"} new1Title={"Nike Heritage 2.0 Backpack"} new2Title={"Stradivarius Leather Jacket"} new3Title={"Calvin Klein Denim Light"} new4Title={"Adidas Superstar Trainers"} new5Title={"Nike Heritage 86 Cap"} new6Title={"New Balance Accelerate Tight"} heroTwo1={heroTwo1} heroTwo2={heroTwo2} heroTwo3={heroTwo3} brands1={null} brands2={null} home={true}/>
    </div>
  )
}

export default Home