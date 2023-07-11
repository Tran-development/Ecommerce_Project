import React from 'react'
import './Navbar.scss'
import en from '../../assets/images/en.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbarr'>
      <div className="wrapperr">
        <div className='left'>
          <div className="item">
            <img src={en} width={50} height={30} />
            <ArrowDropDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <ArrowDropDownIcon />
          </div>
          <div className="item">
            <Link className='link' to="product/1">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="product/2">Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="product/3">Children</Link>
          </div>
          <div className="item">
            <Link className='link' to="product/4">Accessories</Link>
          </div>
        </div>
        <div className='center'>GARIHI</div>
        <div className='right'>
        <div className="item">
            <Link className='link' to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">About</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteBorderIcon />
            <div className="cartShopping">
              <ShoppingCartIcon />
              <span className='number-card'>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar