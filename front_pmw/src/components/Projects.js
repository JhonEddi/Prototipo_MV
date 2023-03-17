import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import socio1 from "../assets/img/UDFJC-Socio.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Desarrollo Web",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Desarrollo Java",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Git & GitHub",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const socios = [
    {
      title: "Universidad Distrital",
      description: "",
      imgUrl: socio1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Unetenos</h2>
                  <p>
                    Como empresa conocemos la verdadera importancia que tiene el
                    valor del talento humano, por ello en TechMight queremos
                    brindarte la mejor calidad, brindando profesionales al mundo
                    del mercado laboral enfocado al desarrollo de software,
                    asegurando sus capacidades por medio de nuestros cursos y
                    capacitaciones.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Cursos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Socios</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mision y Vision</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {socios.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>MISION</p>
                        <p>
                          Estamos comprometidos en apoyar el fortalecimiento de
                          los procesos de selección disponiendo para nuestros
                          clientes nuestra experiencia en innovación,
                          metodologías y procesos para la capacitación de
                          personas especializadas en desarrollo de software
                          poniendo a su alcance soluciones tecnológicas de punta
                          para cumplir este fin.
                        </p>
                        <p>VISION</p>
                        <p>
                          En 2028 seremos una reconocida como la empresa
                          tecnológica en selección y capacitación más importante
                          en colombia, esperando abrir la puerta a nuevos
                          clientes y ayudar a reducir el desempleo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="ColorSharp2"></img>
    </section>
  );
};
