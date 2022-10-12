import React from 'react'
import Bg from '../images/Dubai-bg.jpg'
import dubayinfo from '../images/dubay-info.jpg'

export default function Dubai() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Tur Dubayga</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>DUBAYGA SAYOHAT</h2>
          </div>

          <div className="country-info__info">
            <img src={dubayinfo} alt="" />
            <div className='country-info__info-texts'>
              <span>6 kech/7 kun</span>
              <h3>DUBAY</h3>
              <p>Dubay safariga taklif etamiz</p>
              <p>Sana: 10.11.2020 - 16.11.2020</p>
              <p>
                * Ocean King xonasi = 2050$ boshlang“ish narx <br /> 
                (Nonushta va Tushlik narx ichida)
              </p>
              <p>
                NARXGA KIRADI: <br />
                * Toshkent-Dubay-Toshkent yo'nalishidagi to'g'ridan-to'g'ri havo reysi <br />
                * tanlangan ovqatlanish bilan mehmonxonada turar joy <br />
                * guruh aeroport-mehmonxona-aeroport transferlari <br />
                * Toshkent-Dubay-Toshkent reysida ovqatlanish <br />
                *Tibbiy sug'urta <br />
                * Viza
              </p>

              <p>
                Bundan tashqari, to'lanadi: <br />
                - xizmat kompaniyasi
              </p>

              <p>
                Malumotlar uchun: <br />
                +998931419999 <br />
                +998931409999
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
