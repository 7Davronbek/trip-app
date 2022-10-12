import React, {Component} from 'react'
import Slider from 'react-slick'
import Italy from '../images/slider-italy.jpg'
import Yevropa from '../images/card-yevropa.jpg'
import Dubay from '../images/card-dubai.png'
import Yaponiya from '../images/card-yaponiya.jpg'
import Vinetsiya from '../images/card-vinetsa.jpg'
import Fransiya from '../images/card-fransiya.jpg'

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="PauseOnHover" data-aos="zoom-in-up">
        <div className='container'>
          <h2>Turlar</h2>
          <p className='slider-title'>Hozirgi vaqtda sayohlik kompaniyasi nafaqat tashqi turizim bilan balkiy Uzbekiston ichki turizm sohasida ham xizmatlarini taklif qilmoqda</p>
          <Slider data-aos="zoom-in-up" className='sliderr' {...settings}>
            <div className='slider__item'>
              <img className='slider-image' src={Dubay} alt="" />
              <div className="slider-price">
                <p>Boshlang'ich narxi 2050 $<span>/ 7 kunga</span></p>
              </div>
              <div className='slider-info'>
                <p>Dubayga sayohat</p>
                <span className='slider-info-span'>Ajoyib narxda</span>
              </div>
            </div>

            <div className='slider__item'>
              <img className='slider-image' src={Yaponiya} alt="" />
              <div className="slider-price">
                <p>2550 $<span>/ 7 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>Yaponiya</p>
                <span className='slider-info-span'>Tokyo - Osaka</span>
              </div>
            </div>

            <div className='slider__item'>
              <img className='slider-image' src={Italy} alt="" />
              <div className="slider-price">
                <p>919 $<span>/ 12 kunga</span></p>
              </div>
              <div className='slider-info'>
                <p>Grant tur Yevropaga!</p>
                <span className='slider-info-span'>Ajoyib narxda</span>
              </div>
            </div>


            <div className='slider__item'>
              <img className='slider-image' src={Vinetsiya} alt="" />
              <div className="slider-price">
                <p>1999 $<span>/ 7 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>Italiya - Vinetsiya</p>
                <span className='slider-info-span'>Vinetsiya karnavaliga taklif qilamiz</span>
              </div>
            </div>

            <div className='slider__item'>
              <img className='slider-image' src={Fransiya} alt="" />
              <div className="slider-price">
                <p>877 $<span>/ 8 kun</span></p>
              </div>
              <div className='slider-info'>
                <p>Italiya - Fransiya</p>
                <span className='slider-info-span'>Rim - Parij</span>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    );
  }
}
