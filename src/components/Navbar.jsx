import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className="containerr">
        <div className="nav-menu">
          <Link to="/"><img src={Logo} alt="" /></Link>

          <ul className='nav-list'>
            <li className='nav-item'><Link to="/">Asosiy</Link></li>
            <li className='nav-item'><Link to='/tours'>Turlar</Link></li>
            <li className='nav-item'><Link to='/services'>Xizmatlar</Link></li>
            <li className='nav-item'><Link to='/blogs'>Bloglar</Link></li>
            <li className='nav-item'><Link to='/about'>Biz haqimizda</Link></li>
            <li className='nav-item'><Link to='/contact'>Aloqalar</Link></li>

          </ul>

        </div>
      </div>
    </div>
  )
}
