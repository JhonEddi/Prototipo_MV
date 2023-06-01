import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Card, Form, Button, Container, InputGroup, Row, Col } from "react-bootstrap";
import logo from '../assets/img/Logo2.svg';
import { Link } from "react-router-dom";

export const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes validar y enviar los datos del usuario
        console.log(user, password, rememberMe);
    };

    return (
        <main class="min-vh-100 py-3 py-0" style={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)" }}>
            <Container className="mt-5">
                <Card className="login-card">
                    <Row className="no-gutters justify-content-center">
                        <div style={{width:'460px'}}>
                            <Card.Body>
                                    <div className="brand-wrapper">
                                        <img src={logo} alt="Headder Img" className="logo" />
                                    </div>
                                    <p class="login-card-description">Iniciar sesión con tu cuenta</p>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label className="sr-only text-mute" style={{ color: "black"}}><Icon className="mx-2" icon="fa-solid:user" /> Usuario</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Ingresa tu usuario"
                                                value={user}
                                                onChange={(e) => setUser(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Label className="sr-only" style={{ color: "black"}}><Icon className="mx-2" icon="fa-solid:lock" /> Contraseña</Form.Label>
                                            <Form.Control
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Ingresa tu contraseña"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </Form.Group>
                                        
                                        <Row className="justify-content-center" style={{marginRight: "0.25px", marginLeft: "0.25px"}}>
                                            <Link variant="primary" type="submit" className="btn btn-block login-btn m-0" to="/home">
                                                Iniciar sesión
                                            </Link>
                                        </Row>
                                        <p className="login-card-footer-text text-center">
                                            ¿No tienes una cuenta? <br /><a href="/register">Regístrate aquí</a>
                                        </p>
                                        <a href="#!" class="forgot-password-link">¿Has olvidado tu contraseña?</a>
                                        <div class="login-card-footer-nav">
                                            <a href="##">Condiciones de uso. </a>
                                            <a href="##">Política de privacidad</a>
                                        </div>
                                    </Form>
                            </Card.Body>
                        </div>
                    </Row>
                </Card>
            </Container>
        </main>
    );
}
