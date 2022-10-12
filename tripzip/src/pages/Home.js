import React from 'react'
import Slider from 'react-slick'
import Header from '../components/Header'
import HomeCards from '../components/HomeCards'
import PauseOnHover from '../components/HomeSlider'
import Icons from '../components/Icons'
import Sohil from '../components/Sohil'
import TelegramOffer from '../components/TelegramOffer'
import Title from '../components/Title'

export default function Home() {
  return (
    <div>
      <Header/>
      <Icons/>
      <HomeCards/>
      <Sohil/>
      <Title/>
      <PauseOnHover/>
      
    </div>
  )
}
