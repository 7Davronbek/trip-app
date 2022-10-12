import React, { useEffect } from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { TRIP_LANGUAGE } from '../tools/constants'
import { getLanguage, getText } from '../locales'

export default function Navbar() {

  const changeLanguage = (e) => {
    localStorage.setItem(TRIP_LANGUAGE, e)
    document.location.reload(true)
  }

  useEffect(() => {
    // changeLanguage()
  }, [])

  return (
    <div className='Navbar'>
      <div className="containerr">
        <div className="nav-menu">
          <Link to="/"><img src={Logo} alt="" /></Link>

          <ul className='nav-list'>
            <li className='nav-item'><Link to="/">{getText('home')}</Link></li>
            <li className='nav-item'><Link to='/tours'>Turlar</Link></li>
            <li className='nav-item'><Link to='/services'>Xizmatlar</Link></li>
            <li className='nav-item'><Link to='/blogs'>Bloglar</Link></li>
            <li className='nav-item'><Link to='/about'>Biz haqimizda</Link></li>
            <li className='nav-item'><Link to='/contact'>Aloqalar</Link></li>
            <li className='nav-item langWrap'>
              <h5 className='mb-5'>
                {getLanguage() === 'en' ? <><i><img src="/en.svg" alt="" /></i> en</> : getLanguage() === 'uz' ? <><i><img src="/uz.svg" alt="" /></i> uz</> : <><i><img src="/ru.svg" alt="" /></i> ru</>}
              </h5>
              <div className="wrap">

                <p onClick={() => changeLanguage('uz')}><i><img src="/uz.svg" alt="" /></i> uz</p>
                <p onClick={() => changeLanguage('ru')}><i><img src="/ru.svg" alt="" /></i> ru</p>
                <p onClick={() => changeLanguage('en')}><i><img src="/en.svg" alt="" /></i> en</p>

              </div>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}
