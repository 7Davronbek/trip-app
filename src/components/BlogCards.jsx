import React from 'react'
import Card1 from '../images/sohilcrircle1.jpg'
import Card2 from '../images/blog-img2.jpg'
import Card3 from '../images/blog-img3.jpg'
import Cricle1 from '../images/sohilcrircle1.jpg'
import Cricle2 from '../images/sohilcrircle2.jpg'
import Cricle3 from '../images/sohilcrircle3.jpg'


export default function BlogCards() {
  return (
    <div className='BlogCards'>
      <div className="container">
        <div className="blog-cards">

          <div>
            <div className="blog-card">
              <img src={Card1} alt="" />
              <div className='blog-card__info'>
                <p>Feb 02, 2020 Admin</p>
                <h3>Biz Nha Trangga sayohatni taklif qilamiz</h3>
                <p>Nha Trang - Vetnamnig janubidagi qirgoq kurort shaharchasi, plyajliy joylari va orollari bilan mashhur</p>
              </div>
            </div>

            <div className="blog-card">
              <img src={Card2} alt="" />
              <div className='blog-card__info'>
                <p>Feb 02, 2020 Admin</p>
                <h3>Toshkent shahridan Zanzibar shahriga yo'llanmalar va yo'llanmalar</h3>
                <p>Zanzibar yoki Unguja Afrikaning Sharqiy qirg'og'i yaqinidagi tanzaniyalik arxipelag va uning asosiy orollari</p>
              </div>
            </div>

            <div className="blog-card">
              <img src={Card3} alt="" />
              <div className='blog-card__info'>
                <p>Feb 02, 2020 Admin</p>
                <h3>Biz Nha Trangga sayohatni taklif qilamiz</h3>
                <p>Nha Trang - Vetnamnig janubidagi qirgoq kurort shaharchasi, plyajliy joylari va orollari bilan mashhur</p>
              </div>
            </div>
          </div>

          <div className='recent-blog'>

            <h3 className='recent-tittle'>RECENT BLOG</h3>

            <div  data-aos="zoom-in-up" className='sohil-info__blogs'>
              <img className='cricle-image' src={Cricle1} alt="" />
              <div className='sohil-info__blogs-info'>
                <span>Feb 02, 2020</span>
                <h3>Biz Nha Trangga sayohatni taklif qilamiz</h3>
                <p>Admin</p>
              </div>
            </div>

            <div  data-aos="zoom-in-up" className='sohil-info__blogs'>
              <img className='cricle-image' src={Cricle2} alt="" />
              <div className='sohil-info__blogs-info'>
                <span>Feb 02, 2020</span>
                <h3>Toshkent shahridan Zanzibar shahriga yo'llanmalar va yo'llanmalar</h3>
                <p>Admin</p>
              </div>
            </div>

            <div  data-aos="zoom-in-up" className='sohil-info__blogs'>
              <img className='cricle-image' src={Cricle3} alt="" />
              <div className='sohil-info__blogs-info'>
                <span>Feb 02, 2020</span>
                <h3>Ajoyib Shri-Lanka</h3>
                <p>Admin</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
