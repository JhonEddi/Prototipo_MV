import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Card,
    Row,
    Col,
    Container,
    ProgressBar, Badge, InputGroup, Form
} from 'react-bootstrap';
import { Icon } from '@iconify/react';


export const EvaluationList = () => {
    //Arreglo de evaluaciones.
    const [evaluaciones, setEvaluaciones] = useState([
        { id: 1, titulo: "Evaluación de HTML y CSS", texto: "En esta evaluación debes crear una página web estática con HTML y CSS siguiendo las especificaciones dadas.", progreso: 80 },
        { id: 2, titulo: "Evaluación de JavaScript", texto: "En esta evaluación debes resolver una serie de ejercicios de programación con JavaScript usando variables, funciones, condicionales, bucles y arrays.", progreso: 0 },
        { id: 3, titulo: "Evaluación de React", texto: "En esta evaluación debes crear una aplicación web dinámica con React usando componentes, props, estado y hooks.", progreso: 100 },
        { id: 4, titulo: "Evaluación de Node.js", texto: "En esta evaluación debes crear una API REST con Node.js usando Express, MongoDB y Mongoose.", progreso: 90 },
        { id: 5, titulo: "Evaluación de Python", texto: "En esta evaluación debes resolver una serie de ejercicios de programación con Python usando variables, funciones, condicionales, bucles y listas.", progreso: 40 },
        { id: 6, titulo: "Evaluación de SQL", texto: "En esta evaluación debes crear una base de datos relacional con SQL usando tablas, consultas, joins y agregaciones.", progreso: 30 },
        { id: 7, titulo: "Evaluación de Git y GitHub", texto: "En esta evaluación debes usar Git y GitHub para gestionar el versionamiento y la colaboración de tus proyectos de software.", progreso: 20 },
        { id: 8, titulo: "Evaluación de Docker y Kubernetes", texto: "En esta evaluación debes usar Docker y Kubernetes para crear y desplegar contenedores con tus aplicaciones web.", progreso: 10 },
        { id: 9, titulo: "Evaluación de AWS", texto: "En esta evaluación debes usar AWS para alojar y escalar tus aplicaciones web en la nube.", progreso: 90 },
      ]);
      

    // handle para ir a ver la evaluación.
    const navigate = useNavigate();
    const handleEvaluationClick = (id) => {
        // Aquí puedes pasar el id de la evaluación como un parámetro o un estado
        navigate(`/quiz`);
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
            <Container style={{ padding: "160px 0 160px 0" }}>
                <Row>
                    <Col className='p-4'>
                        <Form.Group className="mb-3">
                            <h3>Buscar evaluación</h3>
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
                                        <Icon icon="carbon:port-input" style={{cursor: 'pointer'}} width="36" height="36" onClick={() => handleEvaluationClick(evaluacion.id)} />
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
* HOY: Lista planes YA
* HOY: Login YA
* HOY: LISTA DE ASPIRANTES * Agregar si paso la prueba o no * YA
* HOY: LISTA DE EMPLEADOS * DUPLICADO DE ASPIRANTES* YA
* LISTA DE EMPRESAS
! Presentar evaluación
! Resultados evaluación LO MISMO PERO SEÑALANDO SI ES CORRECTO, INCORRECTO Y GRAFICA CON LA NOTA

* FIN: LOGIN DEPENDIENDO DE USUARIO CAMBIA MENU SUPERIOR
TODO: EMPRESAS
* RESULTADOS DEL GRUPO
TODO: logica de back (guardado de evaluación, login, usuarios, etc)
*/