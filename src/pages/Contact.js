import React from 'react'
import Contactinfo from '../components/Contactinfo'
import Bg from '../images/aloqa-bg.jpg'

export default function Contact() {
  return (
    <div className='Contact'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Biz bilan bog'laning</h3>
        </div>
      </div>
      <div className="blur"></div>
      <Contactinfo/>
    </div>
  )
}
