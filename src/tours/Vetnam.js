import React from 'react'
import Bg from '../images/tour-vetnam.jpg'
import vetnaminfo2 from '../images/vetnam-info2.jpg'
import vetnaminfo3 from '../images/vetnam-info3.jpg'


export default function Vetnam() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Vetnamga sayohat</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>VETNAMGA SAYOHATNI TAKLIF ETAMIZ</h2>
          </div>

          <div className="country-info__info">
            <img src={Bg} alt="" />
            <div className='country-info__info-texts'>
              <span>9 kun 8 kech</span>
              <h3> Vetnamga qilingan eng yaxshi tanlovimiz!</h3>
              <p>sayohat sanasi:  <br />
14.05.2020 dan  22.05.2020</p>
              <p>9 kun / 8 kecha</p>

            </div>
          </div>

          <div className="country-info__info">
            <img src={vetnaminfo2} alt="" />
            <div className='country-info__info-texts'>
              <p>► Hai An Beach Hotel & Spa 5* (Danang) <br />
Boshlang'ich narxi: 422$
              </p>
              <p>► Queen Ann Nha Trang 5* (Nha Trang) <br />
Boshlang'ich narxi: 460$ </p>
              <p>► Best Western Premer Sonasea Phu Quoc Resort 5* (Fukuok) <br />
Boshlang'ich narxi: 620$</p>
              <p>
              ► Imperial Vung Tau 5* (Vungtau) <br />
Boshlang'ich narxi: 688$ 
              </p>
              <p>
              ► Anantara Muine Resort & Spa 5 * (Fantxet) <br />
Boshlang'ich narxi: 860$
              </p>

            </div>
          </div>

          <div className="country-info__info">
            <img src={vetnaminfo3} alt="" />
            <div className='country-info__info-texts'>
             
              <p>
              -Tur narxiga quyidagilar kiradi: <br />
►  Mehmonxona 5* <br />
►  Ertalabki nonushta <br />
►  Tibbiy sug'urta <br />
►  Transport</p>
              <p> - Qo'shimcha xarajatlar: <br />
► Firma xizmat xaqqi <br />
► Aviabelet</p>


            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
