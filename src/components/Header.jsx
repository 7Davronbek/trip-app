import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Usa from '../images/usa.jpg'
import Tailand from '../images/tailand.jpg'
import Europe from '../images/yevropa-bg.jpg'
import Dubai from '../images/dubai.jpg'
import Misr from '../images/misr.jpg'
import Malasia from '../images/malasia.jpg'


export default function Header() {
  return (
    <div className='Header'>
       <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Usa}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <h3>Turlar</h3>
            <p>Amerika Qo'shma Shtatlariga</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Tailand}
            alt="Second slide"
          />

          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <h3>Turlar</h3>
            <p>Tailandga</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Europe}
            alt="Third slide"
          />

          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <h3>Turlar</h3>
            <p>
              Yevropaga
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Dubai}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <h3>Turlar</h3>
            <p>Dubayga</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Misr}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <h3>Turlar</h3>
            <p>Misrga</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carusel-image"
            src={Malasia}
            alt="First slide"
          />
          <Carousel.Caption data-aos="fade-up" data-aos-duration="3000">
            <h3>Turlar</h3>
            <p>Malaysiyaga</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  )
}
