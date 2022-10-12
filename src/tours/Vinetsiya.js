import React from 'react'
import Bg from '../images/vinetsiya-bg.jpg'
import vinetsiyainfo from '../images/vinetsiya-info.jpg'

export default function Vinetsiya() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Vinetsiya Karnaval</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>ITALIYA - VINETSIYA</h2>
          </div>

          <div className="country-info__info">
            <img src={vinetsiyainfo} alt="" />
            <div className='country-info__info-texts'>
              <span>7 kun - 6 kechga</span>
              <h3>VINETSIYA KARNAVALIGA TAKLIF QILAMIZ!</h3>
              <p>Sizni 2020 yil 8 fevraldan 25 fevralgacha VENICE-da CARNIVAL-ga taklif qilamiz. <br />
Har yili yarim milliondan oshiq sayyohlar Venetsiyaga karnaval uchun kelishadi.</p>
              <p>Shahar rang-barang kostyumlar va niqobli niqoblar, musiqa sadolari,<br /> teatrlashtirilgan tomoshalar va kontsertlardagi personajlar bilan toldirilgan, <br /> kechqurun esa onlab rang-barang SALUTlar bilan osmon yoritilgan.</p>
              <p>
              Venetsiya karnavali 2020 -dasturi: <br />
8 fevral - 19:00 - Ochiq havoda festival Kannaredjioda <br />
9 fevral - 11:15 Katta kanalda qayiqlarning bayramona namoyishi. <br />
15 fevral - 14:30 festival ochilish bayrami parade. <br />
16 fevral - 11:00 da Karnaval ochildi. soat 15:00 - eng yaxshi karnaval liboslari minorasi San Markoda
              </p>
              <p>
              8- fevraldan 25- fevralgacha muzikalniy kechalar o'tkaziladi
              </p>

              <p>
              Tur narxi:  1999 $ doller <br />
  7 kun /6 kechgach <br />
Ikki mahalliy joyda bir kishi uchun narxi! 
              </p>

              <p>
              Tur narxi <br />
- Mehmonhona 4* / 5 * <br />
-3 mahal ovqat. <br />
-Guruh o'tkazish aeroporti-mehmonxona-aeroport. <br />
-Pragrama bo'ylab ekskursiya. <br />
-Rus tilida  git,operator. <br />
-Qilay Avtobus. 
              </p>

              <p>
              Qo'shimcha to'lov:
              </p>

              <p>-Viza uchun ariza. <br />
-Shahar soliqlari. <br />
-Milandagi qo'shimcha kechaga oldin yoki keyin. <br />
-Tibbiy malumotnpma.</p>

              <p>
                Bizning telefonlar :
              </p>

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
