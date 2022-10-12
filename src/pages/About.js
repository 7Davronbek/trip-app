import React from 'react'
import Aboutinfo from '../components/Aboutinfo'
import Bg from '../images/about-bg.jpg'

export default function About() {
  return (
    <div className='About'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Biz haqimizda</h3>
        </div>
      </div>
      <div className="blur"></div>
      <Aboutinfo/>
    </div>
  )
}
