import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from '../assets/img/Logo2.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { Outlet, Link } from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink =(value) => {
        setActiveLink(value);
    }

    return (
      <div>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""} >
          <Container fluid>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo"/>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" navbarScroll>
                <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                <Nav.Link as={Link} to="/projects" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>Quienes Somos</Nav.Link>
                <Nav.Link as={Link} to="/aspirant" className={activeLink === 'aspirant' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aspirant')}>Aspirantes</Nav.Link>
                <Nav.Link as={Link} to="/evaluation" className={activeLink === 'evaluation' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('evaluation')}>Evaluaciones</Nav.Link>
                <Nav.Link as={Link} to="/contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contacto</Nav.Link>
                <Nav.Link as={Link} to="/plans" className={activeLink === 'plans' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('plans')}>Planes</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={navIcon1} alt="" /></a>
                    <a href="#"><img src={navIcon2} alt="" /></a>
                    <a href="#"><img src={navIcon3} alt="" /></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Inicia Sesion</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    );
}