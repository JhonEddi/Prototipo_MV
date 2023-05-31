import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Card,
    Row,
    Col,
    Container,
    Button,
    ProgressBar, Badge, InputGroup, Form
} from 'react-bootstrap';
import { Icon } from '@iconify/react';


export const EvaluationList = () => {
    //Arreglo de evaluaciones.
    const [evaluaciones, setEvaluaciones] = useState([
        { id: 1, titulo: "Evaluación 1", texto: "Con texto de apoyo...", progreso: 80 },
        { id: 2, titulo: "Evaluación 2", texto: "Con otro texto...", progreso: 70 },
        { id: 3, titulo: "Evaluación 3", texto: "Con otro texto...", progreso: 100 },
        { id: 4, titulo: "Evaluación 4", texto: "Con otro texto...", progreso: 50 },
        { id: 5, titulo: "Evaluación 5", texto: "Con otro texto...", progreso: 40 },
        { id: 6, titulo: "Evaluación 6", texto: "Con otro texto...", progreso: 30 },
        { id: 7, titulo: "Evaluación 7", texto: "Con otro texto...", progreso: 20 },
        { id: 8, titulo: "Evaluación 8", texto: "Con otro texto...", progreso: 10 },
        { id: 9, titulo: "Evaluación 9", texto: "Con otro texto...", progreso: 90 },
        // etc
    ]);

    // handle para ir a ver la evaluación.
    const navigate = useNavigate();
    const handleEvaluationClick = (id) => {
        // Aquí puedes pasar el id de la evaluación como un parámetro o un estado
        navigate(`/evaluacion/${id}`);
    };

    const [busqueda, setBusqueda] = useState("");
    // Creamos un estado para guardar las evaluaciones filtradas
    const [evaluacionesFiltradas, setEvaluacionesFiltradas] = useState(evaluaciones);

    // Usamos un efecto para actualizar las evaluaciones filtradas cuando cambia la busqueda
    useEffect(() => {
        // Filtramos el arreglo original de evaluaciones según la busqueda
        const nuevasEvaluacionesFiltradas = evaluaciones.filter((evaluacion) => {
            return evaluacion.titulo.toLowerCase().includes(busqueda.toLowerCase());
        });
        // Actualizamos el estado con el nuevo arreglo filtrado
        setEvaluacionesFiltradas(nuevasEvaluacionesFiltradas);
    }, [busqueda, evaluaciones]); // Indicamos que el efecto depende del estado de busqueda


    return (
        <div style={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)" }}>
            <Container style={{ padding: "160px 0 100px 0" }}>
                <Row>
                    <Col className='p-4'>
                        <Form.Group className="mb-3">
                            <Form.Label>Buscar evaluación</Form.Label>
                            <InputGroup label="Buscar">
                                <Form.Control type="search" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} className="input" placeholder="Buscar" />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
                <Row xs={1} md={1} lg={1} className='g-4'>
                    {evaluacionesFiltradas.map((evaluacion) => (
                        <Col key={evaluacion.id}>
                            <Card className='h-100 p-3 border-0' style={{ backgroundColor: "rgb(72,74,78, 0.6)" }}>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                    <div className='flex-fill'>
                                        <Card.Title>{evaluacion.titulo}</Card.Title>
                                        <Card.Text>
                                            {evaluacion.texto}
                                        </Card.Text>
                                        {/* Aquí agregamos el indicador según el tipo de componente */}
                                        {/* Si usamos ProgressBar */}
                                        <ProgressBar now={evaluacion.progreso} label={`${evaluacion.progreso}%`} className='w-100'/>
                                        {/* Si usamos Badge */}
                                        <Badge bg={evaluacion.progreso >= 100 ? "success" : "warning"} className='mt-3'>
                                            {evaluacion.progreso >= 100 ? "Completada" : "En curso"}
                                        </Badge>
                                    </div>
                                    <div className='px-4'>
                                        <Icon icon="carbon:port-input" width="36" height="36" onClick={() => handleEvaluationClick(evaluacion.id)} />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

/*
* HOY: Lista planes
* HOY: Login
* HOY: LISTA DE ASPIRANTES * Agregar si paso la prueba o no *
* HOY: LISTA DE EMPLEADOS * DUPLICADO DE ASPIRANTES*
* LISTA DE EMPRESAS
* Perfil usuario
! Presentar evaluación
! Resultados evaluación LO MISMO PERO SEÑALANDO SI ES CORRECTO, INCORRECTO Y GRAFICA CON LA NOTA

* FIN: LOGIN DEPENDIENDO DE USUARIO CAMBIA MENU SUPERIOR
TODO: EMPRESAS
* RESULTADOS DEL GRUPO
TODO: logica de back (guardado de evaluación, login, usuarios, etc)
*/