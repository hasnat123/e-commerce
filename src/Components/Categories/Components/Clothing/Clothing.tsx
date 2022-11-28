import React from 'react'

const Clothing: React.FC = () => {
  return (
    <ul className='categories-box-inner'>
        <li className="categories-box-section half">

            <span>Shop By Product</span>
            <div>
                <ul>
                    <li>View All</li>
                    <li>T-Shirts & Vests</li>
                    <li>Hoodies & Sweatshirts</li>
                    <li>Jackets & Coats</li>
                    <li>Shirts</li>
                    <li>Trousers</li>
                    <li>Tracksuits</li>
                    <li>Jeans</li>
                    <li>Designer</li>

                </ul>
                <ul>
                    <li>Joggers</li>
                    <li>Loungewear</li>
                    <li>Shorts</li>
                    <li>Socks</li>
                    <li>Sportswear</li>
                    <li>Suiits & Tailoring</li>
                    <li>Swimwear</li>
                    <li>Underwear</li>
                    <li>Jumpers & Cardigans</li>
                </ul>
            </div>
            
        </li>
        <li className="categories-box-section">
            <span>Popular Brands</span>
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

export default Clothing