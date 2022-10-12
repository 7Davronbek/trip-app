import React from 'react'
import Logo from '../images/about-logo.png'

export default function Aboutinfo() {
  return (
    <div className='Aboutinfo'>
      <div className="container">
        <div className="about-info">

          <div className="about-info1">
            <h3>О НАС</h3>
            <p>Туристическая компания</p>
          </div>

          <div className="about-info2"> 
            <h2>Туристическая компания</h2>
            <div className='about-info2__info'>
              <img src={Logo} alt="" />
              <div>
                <p className='about-info2__info-title'>«Trip My Dream»</p>
                <p className='about-info2__info-text'>«TMD» является собственностью компании OOO "TRIP MY DREAM", созданной опыт с 2014 году. С самого начала своего основания туристическая компания OOO "TRIP MY DREAM" определила для себя приоритет в индивидуальном подходе к каждому клиенту. И сегодня, компания предоставляет высочайший уровень сервиса и стремится обеспечить комфортный отдых каждому клиенту.</p>
              </div>
            </div>
            <p className='about-info-texts' >Команда OOO "TRIP MY DREAM"— это профессионалы туристической сферы, объединившие свои усилия в целях предоставления только качественного туристического продукта. Основываясь на главных принципах премиального обслуживания клиентов, компания сумела завоевать доверие и уважение среди самых требовательных туристов.</p>
            <p className='about-info-texts' >На данный момент, туристическая компания ориентирована не только на рынок внешнего туризма, она так же активно предлагает свои услуги в сфере внутреннего туризма Узбекистана.</p>
          
          </div>

        </div>
      </div>
    </div>
  )
}
