import React from 'react'
import Bg from '../images/usa.jpg'
import usainfo1 from '../images/usainfo1.jpg'
import usainfo2 from '../images/usainfo2.jpg'



export default function Usa() {
  return (
    <div className='TourCountry'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">A.Q.SH ga sayohat</h3>
        </div>
      </div>
      <div className="blur"></div>

      <div className="country-info">
        <div className="container">
          <div className='country-title'>
            <h2>TUR LAS-VEGES VA LOS-ANJELES</h2>
          </div>

          <div className="country-info__info">
            <img src={usainfo2} alt="" />
            <div className='country-info__info-texts'>
              <span>5 kun / 4 kecha</span>
              <h3>TUR NARXI: 1999$</h3>
              <p>Tur sanasi: (Har oy)</p>
              <p>  Tur narxi 1999 $ <br />
(ikki kishi 1 xona olganda)</p>
              <p>
              Turistik dastur: <br />
1-kun Las-Vegasga kelish. <br />
2-kun Las-Vegas <br />
3-kun Grand Kanyon <br />
4-kun 66 - avto yo'l  <br />
5-kun Los-Anjeles <br />
Siz ko'radigan shaharlar: <br />
Kaliforniya, Arizona, Nevada, Los-Anjeles, Las-Vegas, Milliy boglar, Grand Kanyon
              </p>
              <p>
              Narxni ichiga kiradi: <br />
- Transferlar Aeroport - mehmonxona - aeroport - Turistik klass 4 * 5 * <br />
- Yo'nalish bo'ylab rus tilida muloqat. <br />
-Yo'nalish bo'ylab ekspozitsiyalar va muzeylar; <br />
-Nnushta faqat Las Vegesdan tashqari
              </p>

              <p>Malumotlar uchun</p>

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
