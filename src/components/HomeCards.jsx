import React from 'react'
import Vinetsa from '../images/card-vinetsa.jpg'
import Dubai from '../images/card-dubai.png'
import Yaponiya from '../images/card-yaponiya.jpg'
import Yevropa from '../images/card-yevropa.jpg'
import Fransiya from '../images/card-fransiya.jpg'
import Misr from '../images/card-misr.jpg'
import Malaysia from '../images/card-malayzia.jpg'
import Usa from '../images/usa.jpg'
import { Link } from 'react-router-dom'

export default function HomeCards() {
  return (
    <div className='HomeCards'>
      <div className="co">
        <h3>Dunyo boylab turlar</h3>
        <p className='home-card-title'>Byudjet turlari / Individual turlari / Oilaviy turlari</p>

        <div className="home-cards ">

          <Link to="/dubai">
            <div className='home-card' data-aos="fade-up" data-aos-duration="1000">
              <img className='home-card-image' src={Dubai} alt="" />
              <div className="home-card-info">
                <p className='home-card-date'>7kun</p>
                <p className='home-card-location'>Dubayga Sayohat</p>
                <p className='home-card-location2'>Ajoyib narxda</p>
                <p className='home-card-price'>Boshlang'ich narxi 2050 $</p>
              </div>
            </div>
          </Link>

          <Link to="/yaponiya">
            <div className='home-card' data-aos="fade-up" data-aos-duration="1200">
              <img className='home-card-image' src={Yaponiya} alt="" />
              <div className="home-card-info">
                <p className='home-card-date'>7kun</p>
                <p className='home-card-location'>Yaponiya</p>
                <p className='home-card-location2'>Tokiyo-Osaka</p>
                <p className='home-card-price'>2550 $ ga</p>
              </div>
            </div>
          </Link>

          <Link to="/yevropa">
            <div className='home-card' data-aos="fade-up" data-aos-duration="1400">
              <img className='home-card-image' src={Yevropa} alt="" />
              <div className="home-card-info">
                <p className='home-card-date'>12 kunga</p>
                <p className='home-card-location'>Grant tur yevropaga</p>
                <p className='home-card-location2'>Ajoyib narxda</p>
                <p className='home-card-price'>919 $</p>
              </div>
            </div>
          </Link>

          <Link to="/vinetsiya">
            <div className='home-card' data-aos="fade-up" data-aos-duration="1600">
              <img className='home-card-image' src={Vinetsa} alt="" />
              <div className="home-card-info">
                <p className='home-card-date'>7kun</p>
                <p className='home-card-location'>Italiya-vinetsiya</p>
                <p className='home-card-location2'>Vinetsiya Karnavaliga taklif qilamiz</p>
                <p className='home-card-price'>1999 $</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="home-cards ">
          
          <Link to='fransiya'>
            <div className='home-card'data-aos="fade-up" data-aos-duration="1000">
              <img className='home-card-image' src={Fransiya} alt="" />
              <div className="home-card-info">
                <p className='home-card-date'>8kun</p>
                <p className='home-card-location'>italy-fransiya</p>
                <p className='home-card-location2'>RIM - PARIj</p>
                <p className='home-card-price'>877 $</p>
              </div>
            </div>
          </Link>

          <Link to='/misr'>
            <div className='home-card'data-aos="fade-up" data-aos-duration="1200">
              <img className='home-card-image' src={Misr} alt="" />
              <div className="home-card-info">
                <p className='home-card-date'>7kun</p>
                <p className='home-card-location'>misrga sayohat</p>
                <p className='home-card-location2'>Sharm-Al-Sheyx</p>
                <p className='home-card-price'>650 $</p>
              </div>
            </div>
          </Link>

          <Link to="/malasia">
            <div className='home-card'data-aos="fade-up" data-aos-duration="1400">
              <img className='home-card-image' src={Malaysia} alt="" />
              <div className="home-card-info">
                <p className='home-card-date'>12 kunga</p>
                <p className='home-card-location'>Malayziyaga tur</p>
                <p className='home-card-location2'>Kuala Lumpur</p>
                <p className='home-card-price'>550 $</p>
              </div>
            </div>
          </Link>

          <Link to='/usa'>
            <div className='home-card'data-aos="fade-up" data-aos-duration="1600">
              <img className='home-card-image' src={Usa} alt="" />
              <div className="home-card-info">
                <p className='home-card-date'>5 kun / 4 kecha</p>
                <p className='home-card-location'>tur las-vegas va los-anjeles</p>
                <p className='home-card-location2'>5 kun / 4 kecha</p>
                <p className='home-card-price'>1999 $</p>
              </div>
            </div>
          </Link>

        </div>

        
      </div>
    </div>
  )
}
