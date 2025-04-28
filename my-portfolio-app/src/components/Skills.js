import { Container, Col, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";

export const Skills = () => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };

    return (
        <section className="skill" id="skills">
          <Container>
            <Row>

            </Row>
                <div className="skill-bx">
                  <h1>
                    Skills
                  </h1>
                   <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text since the 1500s.
              typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text since the 1500s.
                </p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Web Development</h5>
                  </div>
               <div className="item">
                 <img src={meter2} alt="Image" />
                    <h5>Brand Identity</h5>
                     </div>
               <div className="item">
                <img src={meter3} alt="Image" />
                 <h5>Logo Design</h5>
                  </div>
               <div className="item">
                 <img src={meter4} alt="Image" />
                  <h5>Web Application</h5>
                    </div>
                </Carousel>
              </div>
            <Col>
           </Col>
          </Container>
          <img className="background-image-left" src={meter1} />
        </section>
    )
}