import React from 'react'
import Bg from '../images/tour-avstriya.jpg'
import avstriyainfo1 from '../images/avstriyainfo1.jpg'
import avstriyainfo2 from '../images/avstriyainfo2.jpg'
import avstriyainfo3 from '../images/shyinfo.jpg'


export default function Avstriya() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Avstriya tog 'ko'llarga sayohat</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>AVSTRIYAGA SAYOHAT</h2>
          </div>

          <div className="country-info__info">
            <img src={avstriyainfo1} alt="" />
            <div className='country-info__info-texts'>
              <span>8 kun</span>
              <h3>AVSTRIYA TOG 'KO'LLARGA SAYOHAT</h3>
              <p>Sayohat sanasi:     08/15/2020 dan 08/22/2020</p>
              <p>7 kecha / 8 kun</p>
              <p>Boshlang'ich sayohat narxi: $ 1166 dan</p>
              <p>Ikki turar joy uchun bir kishi uchun to'lanadigan haq</p>

            </div>
          </div>

          <div className="country-info__info">
            <img src={avstriyainfo2} alt="" />
            <div className='country-info__info-texts'>
              <p>
                Dasturning yo'nalishi: <br />
                Praga - Krems - Sent-Gilgen - Salzkammermut - Salzburg - Berchtesgaden - <br /> Gmunden - Linz - Praga
              </p>
              <p>
                1-kun Praga <br />
                2-kun Krems <br />
                3-chi kun Gilgen Salzkammermut <br />
                4-kun Salzkammergut <br />
                5-kun Salzburg <br />
                6-kun Berchtesgaden <br />
                7-kun Gmunden Linz <br />
                8-kun Praga
              </p>

            </div>
          </div>

          <div className="country-info__info">
            <img src={avstriyainfo3} alt="" />
            <div className='country-info__info-texts'>
              <p>
                Tur narxga kiritilgan: <br />
                Mehmonxonalarda yashash 7 kecha  <br />
                ► Ovqat: 7 ta nonushta <br />
                ► Ekskursiya xizmati <br />
                ►Qulay mikroavtobus
              </p>

              <p>
                Qo'shimcha xarajatlar: <br />
                ► Viza uchun ariza <br />
                ►Avval chiptalar <br />
                Yo'nalishdagi ovqat <br />
                ► Muzeylarga va boshqa pullik narsalarga kirish chiptalari
              </p>


            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
