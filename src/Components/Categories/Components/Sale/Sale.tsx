import React from 'react'

const Sale: React.FC = () => {
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
            <span>Find Your Size</span>
            <ul>
                <li>Extra Small</li>
                <li>Small</li>
                <li>Medium</li>
                <li>Large</li>
                <li>Extra Large</li>
                <li>Tall + Skinny</li>
            </ul>
        </li>
    </ul>
  )
}

export default Sale