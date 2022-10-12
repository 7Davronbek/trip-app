import React from 'react'
import BlogCards from '../components/BlogCards'
import Bg from '../images/blogs-bg.jpg'

export default function Blogs() {
  return (
    <div className='Blogs'>
      <img src={Bg} alt="" />
      <div className='tour-info'>
        <div className="container">
          <p data-aos="fade-up" data-aos-duration="3000">TRIP MY DREAM</p>
          <h3 data-aos="fade-up" data-aos-duration="3000">Bloglar</h3>
        </div>
      </div>
      <div className="blur"></div>
      <BlogCards/>
    </div>
  )
}
