import React from 'react'
import Bg from '../images/malasia-bg.webp'
import malasiyainfo from '../images/malasia-info.jpg'

export default function Malasia() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Kuala - Lumpurga sayohat</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>MALAYZIYAGA TUR</h2>
          </div>

          <div className="country-info__info">
            <img src={malasiyainfo} alt="" />
            <div className='country-info__info-texts'>
              <span>7 kun</span>
              <h3>KUALA-LUMPUR</h3>
              <p>Toshkentdan Kuala-Lumpurga sayohat</p>
              <p>  (Har haftada uchish)  <br />
        6 kecha / 7 kun Turning narxi: <br />
ikki kishilik yashash uchun bir kishi uchun 550 AQSh dollaridan</p>
              <p>
              Tur narxi ichiga oladi: <br />
-Mehmonhona va tallangan oziq-ovqat <br />
-- Toshkent-Kuala-Lumpur-Toshkent transport <br />
              </p>
              <p>
              Qoshimcha tolanadi: <br />
- xizmat korsatish kompaniyasi <br />
- Toshkent-Kuala-Lumpur-Toshkent <br />
- Sugurta
              </p>

        

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
