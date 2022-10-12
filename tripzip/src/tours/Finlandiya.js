import React from 'react'
import Bg from '../images/tour-finlandiya.jpg'
import filandiyainfo1 from '../images/filandiya-info1.jpg'
import filandiyainfo2 from '../images/filandiya-info2.jpg'
import filandiyainfo3 from '../images/filandiya-info3.jpg'


export default function Finlandiya() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Finlyandiya-Shvetsiya</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>FINLYANDIYA-SHVETSIYA</h2>
          </div>

          <div className="country-info__info">
            <img src={filandiyainfo1} alt="" />
            <div className='country-info__info-texts'>
              <span>3 kun</span>
              <h3>AVTOBUS VA PAROM</h3>
              <h4>Ketish sanasi:</h4>
              <p>01.05.2020 dan 03.05.2020</p>
              <p>02.05.2020 dan 04.05.2020</p>
              <p>09.05.2020 dan 11.05.2020</p>
              <p>10.05.2020 dan 12.05.2020</p>

            </div>
          </div>

          <div className="country-info__info">
            <img src={filandiyainfo2} alt="" />
            <div className='country-info__info-texts'>
              <p>Yo‘nalish: <br />
Xelsinki-Turku-Stokgolm-Turku-Porvu
              </p>
              <p>1-kun  Sankt-Peterburg Xelsinki Turku <br />
2-kun  Stokgolm <br />
3-kun  Turku - Porvoo - Sankt-Peterburgning </p>
              <p>►   Tur narxi: $ 377 dan <br />
  Ikki turar joy uchun bir kishi uchun to'lanadigan haq</p>


            </div>
          </div>

          <div className="country-info__info">
            <img src={filandiyainfo3} alt="" />
            <div className='country-info__info-texts'>
              <h4>Tur narxi ichiga kiritilgan:</h4>
              <p>► Yo'nalish bo'ylab qulay avtobusda sayohat <br />
                ► Dastur ekskursiya xizmatlari <br />
                ► Tanlangan toifadagi kabinalarga joylashish <br />
                ► Tibbiy sug'urta
              </p>
              <h4>Qo'shimcha xarajatlar:</h4>
              <p> ►  Viza uchun ariza <br />
►  Aviyabelet</p>


            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
