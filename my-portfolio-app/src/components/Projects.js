import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import meter5 from "../assets/img/meter5.png";
import proImg1 from "../assets/img/proImg1.jpg";
import proImg2 from "../assets/img/proImg2.jpg";
import proImg3 from "../assets/img/proImg3.png";
import proImg4 from "../assets/img/proImg4.png";
import proImg5 from "../assets/img/proImg5.png";
import proImg6 from "../assets/img/proImg6.png";
export const Projects = () => {

    const projects = [
            {
                title: "Business Startup",
                description: "Development & Design",
                imgUrl: proImg4,
            },
            {
                title: "Business Startup",
                description: "Development & Design",
                imgUrl: proImg5,
            },
            {
                title: "Business Startup",
                description: "Development & Design",
                imgUrl: proImg6,
            },
            {
                title: "Business Startup",
                description: "Development & Design",
                imgUrl: proImg3,
            },
            {
                title: "Business Startup",
                description: "Development & Design",
                imgUrl: proImg2,
            },
            {
                title: "Business Startup",
                description: "Development & Design",
                imgUrl: proImg1,
            }
        ];

    return (
    <section className="project" id="project">
          <Container>
            <Row>
              <Col>
                <h2> Projects </h2>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  since the 1500s.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                 <Nav.Item>
                 <Nav.Link eventKey="first">Tab One</Nav.Link>
                 </Nav.Item>

                 <Nav.Item>
                 <Nav.Link eventKey="second">Tab two</Nav.Link>
                 </Nav.Item>

                 <Nav.Item>
                 <Nav.Link eventKey="third">Tab Three</Nav.Link>
                 </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project, index) =>{
                                return(
                                      <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                            )
                            })
                        }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Lorem Ipsum </Tab.Pane>

                  <Tab.Pane eventKey="third">Lorem Ipsum </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
              </Col>
            </Row>
          </Container>
         <img className="background-image-right" src={meter5} />
        </section>
    )
}