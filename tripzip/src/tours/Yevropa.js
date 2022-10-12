import React from 'react'
import Bg from '../images/yevropa-country.jpg'
import yevropainfo from '../images/card-yevropa.jpg'


export default function Yevropa() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Tur Yevropaga</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>GRANT TUR YEVROPAGA!</h2>
          </div>

          <div className="country-info__info">
            <img src={yevropainfo} alt="" />
            <div className='country-info__info-texts'>
              <span>12 Kun</span>
              <h3>GRANT TUR YEVROPA</h3>
              <p>12 kun / 11 kech</p>
              <p>Tur kunlari: <br />
                14.03.2020 — 25.03.2020 <br />
                02.05.2020 — 13.05.2020 <br />
                13.06.2020 — 24.06.2020 <br />
                11.07.2020 — 22.07.2020</p>
              <p>
                Yo'nalish: <br />
                Italiya-Fransiya-Belgiya- <br />
                Nederlandiya-SHimoliy Gallandiya - <br />
                Germaniya-Italiya
              </p>
              <p>
                1 - kun Milan <br />
                2- kun MIlan <br />
                3 - kun Strasburg <br />
                4 - kun Parij <br />
                5 - kun Parij <br />
                6 - kun Bryussel-Amstrdam <br />
                7 - kun Amstrdam-Gaaga <br />
                8 - kun Volendam-Zaanse Sxans-Frankfut <br />
                9 - kun Myunxen <br />
                10 - kun Zamok Noyshbanshtayn-Fyussen-Insburk-Verona <br />
                11 - kun Verona-Venetsiya-Milan <br />
                12 - kun Milan <br />
              </p>

              <p>
              Turnig narxi:   919 $ doller
              </p>

              <p>
                Narxga kiradi: <br />
                -Mehmonxona yashash 3 * <br />
                -11 ta nonushta <br />
                -Gruupavoy tashish ayraport-mehmonxona-ayraport <br />
                -Rus tilida tarjimon <br />
                -Kanfort avtobusda sayohat 
              </p>

              <p>
                Qo'shimcha haridlar: <br />
                -Viza tayorlash <br />
                -Aviya belet <br />
                -Tibbiy sug'urta <br />
                -Milamda ixtiyoriy kechalar dasturidan oldin yoki undan keyin
              </p>

              <p>Tafsilotlar uchun telefon:</p>

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
