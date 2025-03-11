import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarausalPage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img style={{ height: '80vh', position: 'relative', objectFit: 'cover' }} className="d-block w-100" src="src/assests/holi_crousal.webp" alt="" />
          <Carousel.Caption>
             
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ height: '80vh' ,objectFit: 'cover'}} className="d-block w-100" src="src/assests/holi-cro4.jpg" alt="" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ height: '80vh', objectFit: 'cover' }} className="d-block w-100" src="src/assests/holi_cro2.jpg" alt="" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarausalPage;
