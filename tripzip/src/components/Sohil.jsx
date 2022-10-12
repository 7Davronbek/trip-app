import React from 'react'
import Info1 from '../images/sohil.jpg'
import Cricle1 from '../images/sohilcrircle1.jpg'
import Cricle2 from '../images/sohilcrircle2.jpg'
import Cricle3 from '../images/sohilcrircle3.jpg'


export default function Sohil() {
  return (
    <div className='Sohil'>
      <div className="container2">
        <h2 data-aos="zoom-in-up"> Yilning istalgan vaqtida eng yaxshi soxil bo'yida dam olish turlari</h2>
        <p data-aos="zoom-in-up" className='sohil-title'>Tavsiya qilinadigan turlar</p>

        <div className="sohil-info">
          <img className='sohil-info__img1' src={Info1} alt="" />
          <div className='sohil-info__info'>

            <div  data-aos="zoom-in-up" className='sohil-info__blogs'>
              <img className='cricle-image' src={Cricle1} alt="" />
              <div className='sohil-info__blogs-info'>
                <span>Feb 02, 2020</span>
                <h3>Biz Nha Trangga sayohatni taklif qilamiz</h3>
                <p>Nha Trang - Vetnamnig janubidagi qirgoq kurort shaharchasi, plyajliy joylari va orollari bilan mashhur</p>
              </div>
            </div>

            <div data-aos="zoom-in-up"  className='sohil-info__blogs'>
              <img className='cricle-image' src={Cricle2} alt="" />
              <div className='sohil-info__blogs-info'>
                <span>Feb 02, 2020</span>
                <h3>Toshkent shahridan Zanzibar shahriga yo'llanmalar va yo'llanmalar</h3>
                <p>Zanzibar yoki Unguja Afrikaning Sharqiy qirg'og'i yaqinidagi tanzaniyalik arxipelag va uning asosiy orollari</p>
              </div>
            </div>

            <div  data-aos="zoom-in-up" className='sohil-info__blogs'>
              <img className='cricle-image' src={Cricle3} alt="" />
              <div className='sohil-info__blogs-info'>
                <span>Feb 02, 2020</span>
                <h3>Ajoyib Shri-Lanka</h3>
                <p>Shri-Lanka (ilgari Ceylon) Hindiston janubi – Sharqiy sohilidagi Hind okeanida joylashgan Orol davlatidir</p>
              </div>
            </div>

            
          </div>
        </div>
      </div>  
    </div>
  )
}
