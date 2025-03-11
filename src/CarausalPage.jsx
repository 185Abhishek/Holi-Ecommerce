import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from './assests/holi_crousal.webp'
import pic2 from './assests/holi-cro4.jpg'
import pic3 from './assests/holi_cro2.jpg'
const CarausalPage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img style={{ height: '80vh', position: 'relative', objectFit: 'cover' }} className="d-block w-100" src={pic1} alt="" />
          <Carousel.Caption>
             
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ height: '80vh' ,objectFit: 'cover'}} className="d-block w-100" src={pic2} alt="" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ height: '80vh', objectFit: 'cover' }} className="d-block w-100" src={pic3} alt="" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarausalPage;
