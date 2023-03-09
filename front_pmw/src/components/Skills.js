import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/Carousel/meter1.svg";
import meter2 from "../assets/img/Carousel/meter2.svg";
import meter3 from "../assets/img/Carousel/meter3.svg";
import colorSharp from "../assets/img/Carousel/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Habilidades
                            </h2>
                            <p>
                                El desarrollo de software es una actividad que requiere de diversas habilidades técnicas 
                                y personales para crear soluciones innovadoras y funcionales.
                                <br/>
                                Algunas de las habilidades más importantes son la curiosidad,
                                el aprendizaje autodidacta, el dominio de diferentes lenguajes de programación
                                y la capacidad de resolver problemas.
                                <sup>
                                    <a href="https://talently.tech/blog/habilidades-de-un-desarrollador-de-software/">1</a>
                                </sup>
                                <br/>
                                Además, los desarrolladores de software deben trabajar en equipo y comunicarse eficazmente con sus clientes y compañeros.
                                <sup>
                                    <a href="https://profile.es/blog/5-soft-skills-esenciales-para-desarrolladores-de-software/">2</a>
                                </sup>
                                <br/>
                                En esta sección te presentamos algunas de las áreas más relevantes del desarrollo de software.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image1" />
                                    <h5>Desarrollo Web</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image2" />
                                    <h5>Desarrollo de Software</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image3" />
                                    <h5>Desarrollo de Aplicaciones Moviles</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="ColorSharp" />
        </section>
    )
}