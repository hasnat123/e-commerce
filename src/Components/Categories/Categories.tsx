import React, { useState } from 'react'
import Brands from './Components/Brands/Brands';
import Accessories from './Components/Accessories/Accessories';
import Autum from './Components/Autum/Autum';
import FaceBody from './Components/FaceBody/FaceBody';
import NewIn from './Components/NewIn/NewIn';
import Sale from './Components/Sale/Sale';
import Shoes from './Components/Shoes/Shoes';
import SportsWear from './Components/SportsWear/SportsWear';
import Outlet from './Components/Outlet/Outlet';
import Marketplace from './Components/Marketplace/Marketplace';
import Clothing from './Components/Clothing/Clothing';
import Dresses from './Components/Dresses/Dresses';


const Categories: React.FC<{dresses: string | null}> = ({dresses}) => {

  const [activeBox, setActiveBox] = useState<string | null>(null);
  const [active, setActive] = useState<boolean>(true);

  const HandleHoverEnter = (e: React.MouseEvent<HTMLElement>): void =>
  {
    setActiveBox(e.currentTarget.getAttribute('data-value'));
    setActive(true);
  }

  const HandleHoverLeave = (e: React.MouseEvent<HTMLElement>): void =>
  {
    setActive(true);
  }

  const RenderSwitch = () =>
  {
    switch(activeBox)
    {
      case '0':
        return <Sale/>
      case '1':
        return <NewIn/>
      case '2':
        return <Clothing/>
      case '3':
        return <Dresses/>
      case '4':
        return <Shoes/>
      case '5':
        return <SportsWear/>
      case '6':
        return <Accessories/>
      case '7':
        return <Autum/>
      case '8':
        return <FaceBody/>
      case '9':
        return <Brands/>
      case '10':
        return <Outlet/>
      case '11':
        return <Marketplace/>
      default:
        return null;
    }
  }

  return (
    <div className='categories'>
        <ul className="categories-list">
            <li className={(activeBox === "0" && active) ? "categories-list-item active" : "categories-list-item"} data-value="0" onMouseEnter={HandleHoverEnter} onMouseLeave={HandleHoverLeave}>
                <div id="sale">
                    <span>Sale</span>
                </div>
            </li>
            <li className={(activeBox === "1" && active) ? "categories-list-item active" : "categories-list-item"} data-value="1" onMouseEnter={HandleHoverEnter} onMouseLeave={HandleHoverLeave}>New in</li>
            <li className={(activeBox === "2" && active) ? "categories-list-item active" : "categories-list-item"} data-value="2" onMouseEnter={HandleHoverEnter} onMouseLeave={HandleHoverLeave}>Clothing</li>
            {dresses ? <li className={(activeBox === "3" && active) ? "categories-list-item active" : "categories-list-item"} data-value="3" onMouseEnter={HandleHoverEnter} onMouseLeave={HandleHoverLeave}>{dresses}</li> : null}
            <li className={(activeBox === "4" && active) ? "categories-list-item active" : "categories-list-item"} data-value="4" onMouseEnter={HandleHoverEnter} onMouseLeave={HandleHoverLeave}>Shoes</li>
            <li className={(activeBox === "5" && active) ? "categories-list-item active" : "categories-list-item"} data-value="5" onMouseEnter={HandleHoverEnter} onMouseLeave={HandleHoverLeave}>Sportswear</li>
            <li className={(activeBox === "6" && active) ? "categories-list-item active" : "categories-list-item"} data-value="6" onMouseEnter={HandleHoverEnter} onMouseLeave={HandleHoverLeave}>Accessories</li>
            <li className={(activeBox === "7" && active) ? "categories-list-item active" : "categories-list-item"} data-value="7" onMouseEnter={HandleHoverEnter} onMouseLeave={HandleHoverLeave}>Winter</li>
            <li className={(activeBox === "8" && active) ? "categories-list-item active" : "categories-list-item"} data-value="8" onMouseEnter={HandleHoverEnter} onMouseLeave={HandleHoverLeave}>Face + Body</li>
            <li className={(activeBox === "9" && active) ? "categories-list-item active" : "categories-list-item"} data-value="9" onMouseEnter={HandleHoverEnter} onMouseLeave={HandleHoverLeave}>Brands</li>
            <li className={(activeBox === "10" && active) ? "categories-list-item active" : "categories-list-item"} data-value="10" onMouseEnter={HandleHoverEnter} onMouseLeave={HandleHoverLeave}>Outlet</li>
            <li className={(activeBox === "11" && active) ? "categories-list-item active" : "categories-list-item"} data-value="11" onMouseEnter={HandleHoverEnter} onMouseLeave={HandleHoverLeave}>Marketplace</li>
        </ul>
        <div className={active ? "categories-box active" : "categories-box"} onMouseEnter={()=>{setActive(true)}} onMouseLeave={()=>{setActive(false)}}>
          {RenderSwitch()}
        </div>
    </div>
  )
}

export default Categories