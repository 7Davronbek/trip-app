import React from 'react'
import Italy from '../images/slider-italy.jpg'
import Yevropa from '../images/card-yevropa.jpg'
import Dubay from '../images/card-dubai.png'
import Yaponiya from '../images/card-yaponiya.jpg'
import Vinetsiya from '../images/card-vinetsa.jpg'
import Fransiya from '../images/card-fransiya.jpg'
import Gretsiya from '../images/gretsiya.jpg'
import Afrika from '../images/tour-afrika.jpg'
import Turkiya from '../images/tour-turkiya.jpg'
import Parij from '../images/tour-parij.jpg'
import Misr from '../images/tour-misr.jpg'
import Malayziya from '../images/card-malayzia.jpg'
import Aqsh from '../images/usa.jpg'
import Azer from '../images/tour-azer.jpg'
import Vetnam from '../images/tour-vetnam.jpg'
import Finlandiya from '../images/tour-finlandiya.jpg'
import Shy from '../images/tour-shy.jpg'
import Avstriya from '../images/tour-avstriya.jpg'
import Chexiya from '../images/tour-chexiya.jpg'
import Marvarid from '../images/tour-yevropamarvarid.jpg'
import Kruiz from '../images/tour-kruiz.jpg'
import Dubai from '../images/tour-dubai.jpg'
import { Link } from 'react-router-dom'

export default function Tourscards() {
  return (
    <div className='Tourscards'>
      <div className="container">
        <div className='tours-cards'>

          <div className='slider__item' data-aos="fade-up">
            <img className='slider-image' src={Gretsiya} alt="" />
            <div className="slider-price">
              <p>Boshlanish 1085 $ dan<span>/ 8 kunga</span></p>
            </div>
            <div className='slider-info'>
              <p>Tur Gretsiyaga</p>
              <span className='slider-info-span'>Afina</span>
            </div>
          </div>

          <div className='slider__item' data-aos="fade-up">
            <img className='slider-image' src={Afrika} alt="" />
            <div className="slider-price">
              <p>Boshlanish 2500 $ dan<span>/ 9 kunga</span></p>
            </div>
            <div className='slider-info'>
              <p>Tur Afrikaga</p>
              <span className='slider-info-span'>Zimbabve Viktoriya sharsharasi</span>
            </div>
          </div>

          <div className='slider__item' data-aos="fade-up">
            <img className='slider-image' src={Turkiya} alt="" />
            <div className="slider-price">
              <p>Boshlanish 490 $ dan<span>/ 10 kunga</span></p>
            </div>
            <div className='slider-info'>
              <p>MAVSUN OLDINDAN CHEGITMALAR</p>
              <span className='slider-info-span'></span>
            </div>
          </div>

          <div className='slider__item' data-aos="fade-up">
            <img className='slider-image' src={Parij} alt="" />
            <div className="slider-price">
              <p>Boshlanish 955 $ dan<span>/ 9 kunga</span></p>
            </div>
            <div className='slider-info'>
              <p>MAY DAM OLISHLARI UCHUN EVROPA MARVARIDLARI</p>
              <span className='slider-info-span'>Ajoyib narxlar!</span>
            </div>
          </div>
          
          <Link to='/dubai'>
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Dubay} alt="" />
              <div className="slider-price">
                <p>Boshlang'ich narxi 2050 $<span>/ 7 kunga</span></p>
              </div>
              <div className='slider-info'>
                <p>Dubayga sayohat</p>
                <span className='slider-info-span'>Ajoyib narxda</span>
              </div>
            </div>
          </Link>

          <Link to='/yaponiya'>
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Yaponiya} alt="" />
              <div className="slider-price">
                <p>2550 $<span>/ 7 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>Yaponiya</p>
                <span className='slider-info-span'>Tokiyo - Osaka</span>
              </div>
            </div>
          </Link>

          <Link to='/yevropa'>
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Yevropa} alt="" />
              <div className="slider-price">
                <p>Boshlang'ich narxi 2050 $<span>/ 7 kunga</span></p>
              </div>
              <div className='slider-info'>
                <p>Grant tur Yevropaga</p>
                <span className='slider-info-span'>Ajoyib narxda</span>
              </div>
            </div>
          </Link>

          <Link to='/vinetsiya'>
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Vinetsiya} alt="" />
              <div className="slider-price">
                <p>1999 $<span>/ 7 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>Italiya - Vinetsiya</p>
                <span className='slider-info-span'>Vinetsiya Karnavaliga taklif qilamiz</span>
              </div>
            </div>
          </Link>

          <Link to="/fransiya">
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Fransiya} alt="" />
              <div className="slider-price">
                <p>877 $<span>/ 8 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>Italiya - Fransiya</p>
                <span className='slider-info-span'>Rim - Parij</span>
              </div>
            </div>
          </Link>

          <Link to="/misr">
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Misr} alt="" />
              <div className="slider-price">
                <p>650 $<span>/ 7 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>Misrga Sayohat</p>
                <span className='slider-info-span'>Sharm-Al-Sheyx</span>
              </div>
            </div>
          </Link>

          <Link to='/malasia'>
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Malayziya} alt="" />
              <div className="slider-price">
                <p>550 $<span>/ 7 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>Malayziyaga Tur</p>
                <span className='slider-info-span'>Kuala - Lampur </span>
              </div>
            </div>
          </Link>

          <Link to="/usa">
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Aqsh} alt="" />
              <div className="slider-price">
                <p>550 $<span>/ 7 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>Tur LAS-VEGES VA LOS-ANJELES</p>
                <span className='slider-info-span'>5 kun / 4 kecha</span>
              </div>
            </div>
          </Link>

          <Link to='/azerbaijan'>
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Azer} alt="" />
              <div className="slider-price">
                <p>490 $ ga<span>/ 4 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>Azarbayjon</p>
                <span className='slider-info-span'>Baku</span>
              </div>
            </div>
          </Link>

          <Link to='/vetnam'>
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Vetnam} alt="" />
              <div className="slider-price">
                <p>Boshlang'ich narxi 422 $<span>/ 9 kunga</span></p>
              </div>
              <div className='slider-info'>
                <p>VETNAMGA SAYOHATNI TAKLIF ETAMIZ</p>
                <span className='slider-info-span'>Ajoyib narxda</span>
              </div>
            </div>
          </Link>

          <Link to='/filandiya'>
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Finlandiya} alt="" />
              <div className="slider-price">
                <p>Boshlang'ich narxi 377 $<span>/ 3 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>FINLYANDIYA-SHVETSIYA</p>
                <span className='slider-info-span'>Avtobus va parom</span>
              </div>
            </div>
          </Link>

          <Link to="/sharqiyyevropa">
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Shy} alt="" />
              <div className="slider-price">
                <p>Boshlang'ich narxi 1055 $ dan<span>/ 15 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>G'ARBIY VA SHARQIY EVROPANING ENG YAXSHI SAYOHATLAR</p>
                <span className='slider-info-span'>tur Chexiyaga</span>
              </div>
            </div>
          </Link>

          <Link to='/avstriya'>
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Avstriya} alt="" />
              <div className="slider-price">
                <p>Boshlang'ich narxi 1166 $<span>/ 8 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>AVSTRIYAGA SAAYOHAT</p>
                <span className='slider-info-span'>Tog' ko'llarga</span>
              </div>
            </div>
          </Link>

          <Link to='/sanatoriya'>
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Chexiya} alt="" />
              <div className="slider-price">
                <p>Boshlang'ich narxi 744 $<span>/ 8 kunga</span></p>
              </div>
              <div className='slider-info'>
                <p>DAVOLASH VA SOG'LOMLASHTIRISH EKSKURSIYALARI</p>
                <span className='slider-info-span'>Chexiya KARLOVY VARYGA sayohat</span>
              </div>
            </div>
          </Link>

          <Link to='/yevropaga-sayohatlar'>
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Marvarid} alt="" />
              <div className="slider-price">
                <p>Boshlang'ich narxi 955 $ dan<span>/ 9 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>MAY BAYRAMLARI UCHUN EVROPA MARVARIDLARI</p>
                <span className='slider-info-span'>Ajoyib narxda</span>
              </div>
            </div>  
          </Link>
          

          <Link to='/kruiz'>
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Kruiz} alt="" />
              <div className="slider-price">
                <p>Boshlang'ich narxi 552 $ dan<span>/ 8 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>KRUIZ O'RTAYER DENGIZI BARSELONADAN</p>
                <span className='slider-info-span'>Costa Cruises</span>
              </div>
            </div>
          </Link>

          <Link to='/dubay'>
            <div className='slider__item' data-aos="fade-up">
              <img className='slider-image' src={Dubai} alt="" />
              <div className="slider-price">
                <p>Boshlang'ich narxi 333 $<span>/ 5 kunga</span></p>
              </div>
              <div className='slider-info'>
                <p>Dubayga sayohat</p>
                <span className='slider-info-span'>Ajoyib narxda</span>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}
