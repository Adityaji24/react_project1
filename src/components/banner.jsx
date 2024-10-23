import Carousel from 'react-bootstrap/Carousel';
import r21 from "../images/r1.jpeg"
import r22 from "../images/r2.jpeg"
import r23 from "../images/r3.png"


function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={r21} alt="" style={{width:"100%"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={r22} alt="" style={{width:"100%"}} />
       
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={r23} alt="" style={{width:"100%"}} />
       
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;