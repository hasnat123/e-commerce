import React from 'react'
import Categories from '../../Components/Categories/Categories'
import PageContents from '../../Components/PageContents/PageContents'
const Hero1 = require('./../../Assets/Images/hero3mens.webp');
const Hero2 = require('./../../Assets/Images/hero2mens.webp');
const Hero3 = require('./../../Assets/Images/hero1mens.webp');
const Category1 = require('./../../Assets/Images/Category1Mens.webp');
const Category2 = require('./../../Assets/Images/category2mens.webp');
const Category3 = require('./../../Assets/Images/category3mens.webp');

const new1Pic = require('./../../Assets/Images/HomeNewIn1.webp');
const new2Pic = require('./../../Assets/Images/HomeNewIn3.webp');
const new3Pic = require('./../../Assets/Images/HomeNewIn5.webp');
const new4Pic = require('./../../Assets/Images/MensNewIn1.webp');
const new5Pic = require('./../../Assets/Images/MensNewIn2.webp');
const new6Pic = require('./../../Assets/Images/MensNewIn3.webp');


const new1PicHover = require('./../../Assets/Images/HomeNewIn1Hover.webp');
const new2PicHover = require('./../../Assets/Images/HomeNewIn3Hover.webp');
const new3PicHover = require('./../../Assets/Images/HomeNewIn5Hover.webp');
const new4PicHover = require('./../../Assets/Images/MensNewIn1Hover.webp');
const new5PicHover = require('./../../Assets/Images/MensNewIn2Hover.webp');
const new6PicHover = require('./../../Assets/Images/MensNewIn3Hover.webp');

const heroTwo1 = require('./../../Assets/Images/MensHeroTwo1.webp');
const heroTwo2 = require('./../../Assets/Images/MensHeroTwo2.webp');
const heroTwo3 = require('./../../Assets/Images/MensHeroTwo3.webp');

const brands1 = require('./../../Assets/Images/MensBrands1.webp');
const brands2 = require('./../../Assets/Images/MensBrands2.webp');


const MensPage = () => {
  return (
    <div className='mens-page'>
        <Categories dresses={null}/>
        <div className="page-inner">
          <PageContents gender={'Men'} hero1={Hero1} hero2={Hero2} hero3={Hero3} category1={Category1} category2={Category2} category3={Category3} new1Pic={new1Pic} new1PicHover={new1PicHover} new2Pic={new2Pic} new2PicHover={new2PicHover} new3Pic={new3Pic} new3PicHover={new3PicHover} new4Pic={new4Pic} new4PicHover={new4PicHover} new5Pic={new5Pic} new5PicHover={new5PicHover} new6Pic={new6Pic} new6PicHover={new6PicHover} new1Price={"£24.99"} new2Price={"£49.99"} new3Price={"£34.99"} new4Price={"£89.99"} new5Price={"£44.99"} new6Price={"£119.99"} new1Title={"Nike Heritage 2.0 Backpack"} new2Title={"Calvin Klein Denim light"} new3Title={"Nike Heritage 86 Cap"} new4Title={"North Face Men Lhotse Down Jacket"} new5Title={"Adidas Tiro 19 Tracksuit Bottoms"} new6Title={"Men's New Balance 327 Trainers"} heroTwo1={heroTwo1} heroTwo2={heroTwo2} heroTwo3={heroTwo3} brands1={brands1} brands2={brands2} home={false}/>
        </div>
    </div>
  )
}

export default MensPage