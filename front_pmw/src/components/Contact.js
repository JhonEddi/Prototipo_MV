import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/UDFJC-Socio.jpg"

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Enviando...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Contect-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText('Enviar');
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({
                success: true,
                message: "Mensaje enviado con éxito"
            });
        } else {
            setStatus({
                success: false,
                message: 'Algo salió mal, inténtalo de nuevo más tarde.'
            })
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Déjanos tus datos aquí y te escribiremos pronto</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Nombres" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Apellidos" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Correo electrónico" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Número de teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit">
                                        <span>
                                            {buttonText}
                                        </span>
                                    </button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}