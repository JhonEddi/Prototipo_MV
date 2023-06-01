import { Container, Row, Col } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpSubscribe";
import logo from "../assets/img/Logo3.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="aling-items-center">
                    <MailChimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end align-items-center d-flex justify-content-end">
                        <div className="social-icon">
                            <a href="##">
                                <img src={navIcon1} alt="navIcon1" />
                            </a>
                            <a href="##">
                                <img src={navIcon2} alt="navIcon2" />
                            </a>
                            <a href="##">
                                <img src={navIcon3} alt="navIcon3" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}