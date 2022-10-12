import React from 'react'
import Bg from '../images/dubai-bg.webp'
import dubayinfo from '../images/tour-dubai.jpg'

export default function Dubay() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Xamyonbop turlar Dubayga</h3>
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
              <span>5 kun / 4 tun</span>
              <h3>DUBAY</h3>

              <h4>Dubay safariga taklif etamiz!</h4>
              <br />

              <p>Sana : <span className='span-bold'>11.07.2021 - 15.07.2021</span></p>

              <p><span className='span-bold'> Orchid Hotel 3* от 333 USD</span> <br />
                (Deyra) (nonushtasiz) <br />
                =========
              </p>

              <p><span className='span-bold'>Fortune Pearl Hotel 3* от 333 USD</span> <br />
                (Deyra) (nonushtasiz) <br />
                =========
              </p>

              <p><span className='span-bold'>Al Jawhara Metro 2* от 343 USD</span> <br />
                (Deyra) (nonushtasiz) <br />
                =========
              </p>

              <p><span className='span-bold'>Fortune Pearl Hotel 3* от 343 USD</span> <br />
                (Deyra) (nonushtasiz) <br />
              </p>

              <p><span className='bold-span'>NARXGA KIRADI:</span>
                * Toshkent-Dubay-Toshkent yo'nalishidagi to'g'ridan-to'g'ri havo reysi <br />
                * tanlangan ovqatlanish bilan mehmonxonada turar joy <br />
                * guruh bilan aeroport-mehmonxona-aeroport transferlari <br />
                * Dubay reysida ovqatlanish <br />
                * Tibbiy sug'urta (+Covid-19)
              </p>

              <p><span className='bold-span'>Bundan tashqari, to'lanadi:</span> <br /> - Viza (85$)</p>
             
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
