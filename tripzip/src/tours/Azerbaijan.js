import React from 'react'
import Bg from '../images/azer-bg.webp'
import azerinfo2 from '../images/azer-info2.jpg'
import azerinfo3 from '../images/azer-info3.jpg'


export default function Azerbaijan() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Tur Azarbayjon</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>AZARBAYJON</h2>
          </div>

          <div className="country-info__info">
            <img src={Bg} alt="" />
            <div className='country-info__info-texts'>
              <span>Azarbayjonga tur</span>
              <h3>AZARBAYJON - BAKU</h3>
              <p>Ketish sanasi:</p>
              <p>04.02.2020 dan 04.05.2020</p>
              <p>
              04.09.2020 dan 04.12.2020    
              </p>
              <p>
              4 kecha / 3 kun
              </p>

              

            </div>
          </div>

          <div className="country-info__info">
            <img src={azerinfo2} alt="" />
            <div className='country-info__info-texts'>
              <span>Yo‘nalish: <br />
              ➡️ Boku - Ateshgah yong'in ibodatxonasi - Gala etnografik qo'riqxonasi - Baku⬅️
              </span>
              <p>1-kuni Boku</p>
              <p>2-kuni Boku</p>
              <p>
                3-kun Ateshgah yong'in ibodatxonasi "Gala" etnografik qo'riqxonasi  
              </p>
              <p>
                4-kuni Boku
              </p>

            </div>
          </div>

          <div className="country-info__info">
            <img src={azerinfo3} alt="" />
            <div className='country-info__info-texts'>
             
              <p>
        Sayohat narxi: $490 dan <br />
        - Ikkita mahalliy turar joy bilan bir kishi uchun narx!</p>
              <p> Tur narxiga kiradi: <br />
►Tanlangan toifadagi mehmonxonada yashash <br />
► aeroport-mehmonxona-aeroport <br />
► ovqatlanish 3 ta nonushta <br />
► rus tilida so'zlashadigan qo'llanmaning xizmatlari <br />
► qulay avtobus</p>
              <p>
              Qo'shimcha to'lo'vlar: <br />
 ►  Aviabelet <br />
 ►  Tibbiy sug'urta <br />
 ►  Abet - tushlik  
              </p>


            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
