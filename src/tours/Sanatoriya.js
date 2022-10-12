import React from 'react'
import Bg from '../images/tour-chexiya.jpg'
import sanatoriyainfo1 from '../images/sanatoriyainfo1.jpg'
import sanatoriyainfo2 from '../images/sanatoriyainfo2.jpg'
import sanatoriyainfo3 from '../images/sanatoriyainfo3.jpg'


export default function Sanatoriya() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Karkovy vary</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>DAVOLASH VA SOG'LOMLASHTIRISH EKSKURSIYALARI</h2>
          </div>

          <div className="country-info__info">
            <img src={sanatoriyainfo1} alt="" />
            <div className='country-info__info-texts'>
              <span>8 kun 7 kech</span>
              <h3>TIBBIY VA SOG'LOMLASHTIRISH EKSKURSIYALARI</h3>
              <h4>Ketish sanasi:</h4>
              <p>
                Har hafta sayohat <br />
                (yoz va kuz 2020g)
              </p>

              <p>
                Tibbiy va sog'lomlashtirish ekskursiyalari
                Faqat dam olish tartib-qoidalarini emas, balki tabiiy sog'liqni saqlash resurslarini taklif qiluvchi klassik sog'lomlashtirish safari. Sog'lomlashtirish terapevtik protseduralari jadvali mijozning qolish muddatini hisobga olgan holda amalga oshiriladi, bu esa ideal dam olish imkoniyatini beradi.
                Faqat turar joy va kuniga uch marta ovqatlanishni emas, balki tibbiy ko'rikdan, shuningdek, shifokor tomonidan belgilangan tartib-qoidalarni o'z ichiga olgan keng qamrovli sog'liqni saqlash safari. Kompleks sog'liqni saqlash dasturi tufayli siz dam olishdan boshqa hech narsa haqida qayg'urmasligingiz kerak
              </p>

              <h4>
                Mehmonxonalar: 01.04.2020-08.04.2020 bilan  <br />
                <br />
                8 kunlik ikki kishilik turar joy bilan bir kishi uchun narx
              </h4>

            </div>
          </div>

          <div className="country-info__info">
            <img src={sanatoriyainfo2} alt="" />
            <div className='country-info__info-texts'>
              
              <p> Lafonte 4 * dan: <span className='bold-span'>720$</span></p>
              <p> Parkhotel Richmond 4 * tomonidan : <span className='bold-span'>744$</span></p>
              <p> Imperial 4 * tomonidan: <span className='bold-span'>889$</span></p>
              <p> Spa Resort Sanssouci 5*tomonidan:  <span className='bold-span'>1500$</span></p>
              <br />

              <h4>Putyofka ichiga kiritilgan: </h4>

              <p>
                ►Turar joy  <br />
                ►To'liq pansion, nonushta, tushlik, kechki ovqat <br />
                ►Hovuz; sauna; jakuzi / whirlpool <br />
                ►Tibbiy xizmatlar <br />
                ►Davolash / davolash <br />
                ► Tartib ro'yxati
              </p>


            </div>
          </div>

          <div className="country-info__info">
            <img src={sanatoriyainfo3} alt="" />
            <div className='country-info__info-texts'>
              <h4>Qo'shimcha to'lo'vlar:</h4>
              <p>
                ►Viza olish  <br />
                ►Aviachiptalar
              </p>

              <p>Turni tanlash va bron qilish uchun Telegramga yozing yoki qo'ng'iroq qiling </p>

              <p>
                Telefon haqida batafsil ma'lumot:  <br />
                +998 93140-99-99 <br />
                +998 93141-99-99
              </p>


            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
