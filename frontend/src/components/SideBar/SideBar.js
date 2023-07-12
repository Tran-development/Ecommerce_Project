import React from 'react'
import { Link } from 'react-router-dom'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import './SideBar.scss'

const SideBar = () => {
  return (
    <div className="row">
      <div className="content_block">
        <div className="vertical-menu mb-all-30">
          <nav className="category">
            <div className="category_title">
              <div className="category__heading">
                <FormatListBulletedIcon />
                Danh Mục
              </div>
            </div>

            <ul className="vertical-menu-list">
              <li className="category-item category-item--active">
                <Link to='/' className="category-item__link">Automotive & Motorcycle</Link>
                <ul className="ht-dropdown mega-child">
                  <li><Link to='/'>Office chair</Link>
                    <ul class="ht-dropdown mega-child">
                      <li><Link to="/">Bibendum Cursus</Link></li>
                      <li><Link to="/">Dignissim Turpis</Link></li>
                      <li><Link to="/">Dining room</Link></li>
                      <li><Link to="/">Dining room</Link></li>
                    </ul>
                  </li>
                  <li><Link to='/'>Office chair</Link>
                    <ul class="ht-dropdown mega-child">
                      <li><Link to="/">Bibendum Cursus</Link></li>
                      <li><Link to="/">Dignissim Turpis</Link></li>
                      <li><Link to="/">Dining room</Link></li>
                      <li><Link to="/">Dining room</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="category-item">
                <Link to='/' className="category-item__link">Sports & Outdoors</Link>
              </li>
              <li className="category-item">
                <Link to='/' className="category-item__link">Fashion</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default SideBar