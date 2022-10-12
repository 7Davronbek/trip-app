import React from 'react'
import Bg from '../images/misr-bg.jpg'
import misrinfo from '../images/misr-info.jpg'

export default function Misr() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Tur Misrga</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>MISRGA SAYOHAT</h2>
          </div>

          <div className="country-info__info">
            <img src={misrinfo} alt="" />
            <div className='country-info__info-texts'>
              <span>7 kun</span>
              <h3>TOSHKENDAN MSIRGA SAYOHAT</h3>
              <p>(Har chorshanba kunlari uchadigan reyslar) <br />
           7 kun / 6 kechgach <br />
Sayohat narxi: 650 AQSH doller <br />
Ikki kishilik yashash uchun</p>
              <p> Tur narxiga kiradi: <br />
-Toshkent-Sharm-al-sheyx-Toshkent reys <br />
-Mehmonhonada tanlangan ovqatlanish joyi <br />
-Gruhli aeroport Mehonhona aeroport <br />
-Sug'urta</p>
              

              <p>Malumotlar uchun</p>

              <p>
                +998931419999 <br />
                +998931409999 <br />
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
