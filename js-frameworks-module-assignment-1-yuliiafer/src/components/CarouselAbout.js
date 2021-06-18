import Carousel from "react-bootstrap/Carousel";
import coding from "../images/coding.jpg";
import computer from "../images/computer.jpg";
import tech from "../images/tech.jpg";

const CarouselAbout = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={coding}
          alt="First slide"
          max-height={400}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={computer}
          alt="Second slide"
          max-height={400}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tech}
          alt="Third slide"
          max-height={400}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselAbout;
