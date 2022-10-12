import React from 'react'
import Bg from '../images/tour-yevropamarvarid.jpg'
import yevropaga1 from '../images/yevropaga1.jpg'
import yevropaga2 from '../images/yevropaga2.jpg'
import yevropaga3 from '../images/yevropaga3.jpg'


export default function YevropagaSayohatlar() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Yevropaga sayohatlar</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>MAY BAYRAMLARI UCHUN YEVROPA MARVARIDLARI</h2>
          </div>

          <div className="country-info__info">
            <img src={yevropaga1} alt="" />
            <div className='country-info__info-texts'>
              <span>9 kun</span>
              <h3>YEVROPANING AVTOBUS SAFARLARI</h3>
              <p>
                Avtobus safarlari may bayramlari uchun Evropa marvaridlari <br />
                9 kun / 8 kecha
              </p>

              <p>
                Kirish kunlari: <br />
                01.05.2020 dan 09.05.20 gacha
              </p>

              <p>
                Yo'nalish: <br />
                Xelsinki-Turk-Stokgolm-Amsterdam-Parij – Bryussel-Gamburg-Stokgolm-Turk-Xelsinki
              </p>

              <p>
                1-kun Finlyandiyada  <br />
                2 kun Stokgolmga <br />
                3 kun o'simlikka keladi / Zasnits <br />
                4 kun Parij  <br />
                5 kun Parij <br />
                6 kun Bryussel <br />
                7 kun Gamburgga  <br />
                8 kun Treleborgga  <br />
                9-kun Turkiyaga 
              </p>

              <h4>Sayohat narxi: 955 $</h4>
              <p>--Ikki kishilik turar joy bilan bir kishi uchun narx!</p>

              <h4>Tur narxi ichiga kiritilgan:</h4>
              <p>
                ► Qulay avtobus  <br />
                ► 3 mehmonxonalarda turar joy <br />
                ► Mehmonxonalarda nonushta <br />
                ► Dastur bo'yicha ekskursiya xizmati <br />
                ► Rus tilida so'zlashuvchi (git) qo'llanma - guruh yo'riqnomasining xizmatlari
              </p>

              <p>
                Qo'shimch xarajatlar: <br />
                ► Frantsuz vizasi <br />
                ► Tibbiy sug'urta <br />
                ► Mehmonxonalarda bitta turar joy uchun qo'shimcha haq <br />
                Aviachipta
              </p>

              <p>
              Telefon haqida batafsil ma'lumot: <br />
              +998931409999 <br />
              +998931419999
              </p>

            </div>
          </div>

          <div className="country-info__info">
            <img src={yevropaga2} alt="" />
            
          </div>

          <div className="country-info__info">
            <img src={yevropaga3} alt="" />
           
          </div>

          
        </div>
      </div>
    </div>
  )
}
