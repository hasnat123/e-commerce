import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart, faCircleQuestion, faCommentDots, faSearch, faTimes, faBagShopping, faBox, faBoxesPacking } from '@fortawesome/free-solid-svg-icons'

const Navbar: React.FC = () => {

    let navigate = useNavigate();

    const [search, setSearch] = useState<string>();
    const [toggle, setToggle] = useState<boolean>(false);
    const [toggleGender, setToggleGender] = useState<string | null>(null);
    const [overlay, setOverlay] = useState<boolean>(false);


    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    {
      setSearch(e.target.value);
    }
  
    const HandleSearch = (e: React.MouseEvent<HTMLButtonElement>) =>
    {
      e.preventDefault();
      navigate(`/search/${search}`);
    }
  
    const HandleKeySearch = (e: React.KeyboardEvent<HTMLInputElement>) =>
    {
      if(e.key === 'Enter') navigate(`/search/${search}`);
    }
  
    const HandleToggle = (e: React.MouseEvent<any>) =>
    {
      e.preventDefault();
      setToggle(!toggle);
    }

    const HandleToggleGender = (e: React.MouseEvent<HTMLElement>) =>
    {
      e.currentTarget.getAttribute('data-value') ? setToggleGender(e.currentTarget.getAttribute("data-value")) : setToggleGender(null);
    }

    const HandleToggleOverlay = (e: React.MouseEvent<HTMLInputElement>) =>
    {
      e.currentTarget.className === 'navbar-search' ? setOverlay(true) : setOverlay(false);
    }

  return (
    <div className='navbar'>
        <div className="navbar-inner">
          <Link to={'/'} onClick={HandleToggleGender}><h1 className="navbar-logo">XD</h1></Link>

          <ul className='gender-list'>
            <Link to={'/women'}>
              <li className={toggleGender === "0" ? "gender-list-item active" : "gender-list-item"} data-value = "0" onClick={HandleToggleGender}>
                  WOMEN
              </li>
            </Link>
            <Link to={'/men'}>
              <li className={toggleGender === "1" ? "gender-list-item active" : "gender-list-item"} data-value = "1" onClick={HandleToggleGender}>
                  MEN
              </li>
            </Link>
          </ul>

          <div className="navbar-search-container">
            <input type="text" className="navbar-search" placeholder="Search for items and brands" onChange={HandleChange} onKeyDown={HandleKeySearch} onClick={HandleToggleOverlay}/>
            <button className="navbar-search-btn" type="submit" onClick={HandleSearch} >
              <FontAwesomeIcon icon={faSearch}/>
            </button>
          </div>

          <div className={toggle ? "navbar-search-container-mobile open" : "navbar-search-container-mobile"}>
            <input type="text" className="navbar-search" placeholder="Search for an anime..." onChange={HandleChange} onKeyDown={HandleKeySearch}/>
            <FontAwesomeIcon icon={faTimes} className="mobile-search" onClick={HandleToggle}/>
          </div>

          <button className="navbar-search-btn mobile" type="submit" onClick={HandleToggle}>
            <FontAwesomeIcon icon={faSearch}/>
          </button>
          
          
          <ul className='user-list'>
            <li className="user-list-item">
              <FontAwesomeIcon icon={faUser}/>
              <div className="account-dropdown">
                <div className="header">
                  <span className='sign-in'>Sign In<span>|</span>Join</span>
                  <FontAwesomeIcon icon={faTimes} className="header-close" onClick={HandleToggle}/>
                </div>
                <ul className="account-dropdown-list">
                  <li className="account-dropdown-list-item"><span><FontAwesomeIcon icon={faUser}/></span>My Account</li>
                  <li className="account-dropdown-list-item"><span><FontAwesomeIcon icon={faBox}/></span>My Orders</li>
                  <li className="account-dropdown-list-item"><span><FontAwesomeIcon icon={faBoxesPacking}/></span>My Returns</li>
                  <li className="account-dropdown-list-item"><span><FontAwesomeIcon icon={faCircleQuestion}/></span>Returns Information</li>
                  <li className="account-dropdown-list-item"><span><FontAwesomeIcon icon={faCommentDots}/></span>Contact Preferences</li>
                </ul>
              </div>
            </li>
            <li className="user-list-item"><FontAwesomeIcon icon={faHeart}/></li>
            <li className="user-list-item"><FontAwesomeIcon icon={faBagShopping}/></li>
          </ul>


        </div>


    </div>
  )
}

export default Navbar