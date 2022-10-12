import React from 'react'
import Bg from '../images/fransiya-bg.jpg'
import fransiyainfo from '../images/fransiya-info.jpg'

export default function Fransiya() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Italiya - Fransiya</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>Italiya - Fransiya</h2>
          </div>

          <div className="country-info__info">
            <img src={fransiyainfo} alt="" />
            <div className='country-info__info-texts'>
              <span>8 kun</span>
              <h3>RIM - PARIJ</h3>
              <p>Kelish shahari:   Rim</p>
              <p>Safar davomligi:   8 kun</p>
              <p>
                Qabul kunlari: 03.01.2020  10.27.2020
              </p>
              <p>
              Kelish kuni:   Shanba Yakshanba
              </p>

              <p>
              Sayohat turi:   Ekskursiya <br />
              Dam olish turi:   Ekskursiya
              </p>

              <p>
              Qaysi mamlakat orqaliy otishi: Fransiya-Italiya <br />
Mashrut:  Rim - (Neapol va Pompey) — Parij (Versal_ 
              </p>

              <p>
                Sayohat dasturi: <br />
                1- kyn Rim <br />
                2-  kun Rim <br />
                3- kun Rim <br />
                4- kun Rim <br />
                5- kun Rim- Parij <br />
                6- kun Parij <br />
                7- kun Parij <br />
                8- kun Parij
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
