import React from 'react'
import TelegramOffer from '../components/TelegramOffer'
import Tourscards from '../components/Tourscards'
import Bg from '../images/Tourbg.jpg'

export default function Tours() {
  return (
    <div className='Tours'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Find Tours</h3>
        </div>
      </div>
      <div className="blur"></div>
      <Tourscards/>
    </div>
  )
}
