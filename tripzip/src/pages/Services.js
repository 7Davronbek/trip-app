import React from 'react'
import Bg from '../images/services-bg.jpg'
import Icons from '../components/Icons.jsx'

export default function Services() {
  return (
    <div className="Services">
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Bizning xizmatlarimiz</h3>
        </div>
      </div>
      <div className="blur"></div>
      <Icons/>
    </div>
  )
}
