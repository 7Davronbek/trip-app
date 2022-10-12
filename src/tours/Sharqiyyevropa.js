import React from 'react'
import Bg from '../images/tour-shy.jpg'
import shyinfo1 from '../images/shyinfo.jpg'
import shyinfo2 from '../images/shyinfo2.jpg'
import shyinfo3 from '../images/shyinfo3.jpg'
import shyinfo4 from '../images/shyinfo4.jpg'
import shyinfo5 from '../images/tour-turkiya.jpg'
import shyinfo6 from '../images/shyinfo6.jpg'


export default function Sharqiyyevropa() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Chexiya</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>G'ARBIY VA SHARQIY EVROPANING ENG YAXSHI SAYOHATLAR</h2>
          </div>

          <div className="country-info__info">
            <img src={shyinfo1} alt="" />
            <div className='country-info__info-texts'>
              <span>15 kun</span>
              <h3>CHEXIYA</h3>
              <p>09.07.2020 dan 23.07.2020</p>
              <p>06.08.2020 dan 20.08.2020</p>
              <p>17.09.2020 dan 01.10.2020</p>

            </div>
          </div>

          <div className="country-info__info">
            <img src={shyinfo2} alt="" />
            <div className='country-info__info-texts'>
              <p>Yo‘nalish: <br />
  Rim - Boloniya - Lyublyana - Zagreb - Budapesht - Vena - Bratislava - Praga  <br /> - Drezden - Karlsteyn va br Konopiste qalalari - Innsbruk - Salzburg * - Venetsiya
              </p>



            </div>
          </div>

          <div className="country-info__info">
            <img src={shyinfo3} alt="" />
            <div className='country-info__info-texts'>
              
              <p>1-kun Rim</p>
              <p> 2-kuni Riminining </p>
              <p>3-kuni San-Marinoning </p>
              <p> 4-kuni  Lyublyananing </p>
              <p>  5-kun Zagreb</p>
              <p>6-kun Budapesht Siofok</p>
              <p>7-kun Vena</p>


            </div>
          </div>

          <div className="country-info__info">
            <img src={shyinfo4} alt="" />
            <div className='country-info__info-texts'>
              <p> 8-kuni Bratislavaning </p>
              <p> 9-kun Praga</p>
              <p> 10-kun Drezden</p>
              <p> 11-kun Praga</p>
              <p>12-kun Innsbruk Salzburg</p>
              <p>13-kun Venetsiya</p>
              <p> 14-kun Rim</p>


            </div>
          </div>

          <div className="country-info__info">
            <img src={shyinfo5} alt="" />
            <div className='country-info__info-texts'>
              <h4>Tur  narxi: $ 750 dan</h4>
              <p>Ikki turar joy uchun bir kishi uchun to'lanadigan haq</p>
              <p>Narxga kiritilgan:</p>
              <p>► 3 * mehmonxonada joylashish</p>
              <p>► Ovqatlar: 14 ta nonushta</p>
              <p>► aeroport-mehmonxona-aeroport</p>
              <p>► Rus tilida so'zlashadigan git bilan ekskursiyalar</p>


            </div>
          </div>

          <div className="country-info__info">
            <img src={shyinfo6} alt="" />
            <div className='country-info__info-texts'>
              <h4>Qo'shimcha xarajat :</h4>
              <br />
              <p>► Viza uchun ariza</p>
              <p>► Aviiabelet</p>
              <p>► Tibbiy sug'urta</p>


            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
