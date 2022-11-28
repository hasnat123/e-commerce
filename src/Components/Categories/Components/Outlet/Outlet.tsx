import React from 'react'

const pic1 = require('./../../../../Assets/Images/hero1mens.webp');

const Outlet: React.FC = () => {
  return (
    <ul className='categories-box-inner'>
        <li className="categories-box-section half">

        <span>Popular Sections</span>
        <div>
            <ul>
                <li>View All</li>
                <li>Trending</li>
                <li>Newly Added</li>
                <li>T-Shirts & Vests</li>
                <li>Jackets & Coats</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Trousers</li>
                <li>Activewear</li>
                <li>Jeans</li>
                <li>Bags</li>
            </ul>
            <ul>
                <li>Jewllery & Watches</li>
                <li>Shirts</li>
                <li>Shorts</li>
                <li>Swimwear</li>
                <li>Face + Body</li>
                <li>Accessories</li>
                <li>Suits</li>
                <li>Shoes</li>
                <li>Trainers</li>
                <li>Gifts</li>
            </ul>
        </div>

</li>
        <li className="categories-box-section">
            <span>Brands</span>
            <ul>
                <li>Nike</li>
                <li>Adidas</li>
                <li>The North Face</li>
                <li>Umbro</li>
                <li>Supreme</li>
                <li>Puma</li>
                <li>Gym Shark</li>
                <li>Calvin Klein</li>
                <li>Timberland</li>
                <li>Jordan</li>
            </ul>
        </li>
        <li className="categories-box-section">
            <ul className='banner-rows'>
                <li><img src={pic1} alt="" /></li>
                <li><img src={pic1} alt="" /></li>
                <li><img src={pic1} alt="" /></li>
            </ul>
        </li>
    </ul>
  )
}

export default Outlet