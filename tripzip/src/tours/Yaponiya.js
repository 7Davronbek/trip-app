import React from 'react'
import Bg from '../images/Yaponiya-bg.webp'
import yaponiyainfo from '../images/yaponiya-info.jpg'

export default function Yaponiya() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Tur Yaponiyaga</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>Yaponiya</h2>
          </div>

          <div className="country-info__info">
            <img src={yaponiyainfo} alt="" />
            <div className='country-info__info-texts'>
              <span>Yaponiyaga tur</span>
              <h3>Tokiyo-Osaka</h3>
              <p>Yaponiya - Tokio Ajoyib narxlar!</p>
              <p>Tur vaqti: (har oy)</p>
              <p>
                TOURNING DASTURI: <br />
                7 kun / 6 kecha Turning narxi: <br />
                2550 $ AQSh dollari Ikki kishilik yashash uchun <br />
              </p>
              <p>
                Tur dasturi:
              </p>

              <p>
                1-kun Tokio <br /> 
                2-kun Tokio <br />
                3-kun Tokio <br />
                4-kun Osaka <br />
                5-kun Osaka <br />
                6-kun Osaka <br />
                7-kun Tokio 
              </p>

              <p>
                Narxi quyidagilarni o'z ichiga oladi: <br />
                - Tokio va Osakadagi 3 * mehmonxonalarda istiqomat qilish <br />
                - 7 ta nonushta <br />
                - Transfer aeroporti - mehmonxona - aeroport - shaharning diqqatga sazovor joylariga ekskursiya qilish ichiga oladi 
              </p>

              <p>
                Qo'shimcha  to'lo'vlar: <br />
                - Reyslar - vizani rasmiylashtirish ; <br />
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
