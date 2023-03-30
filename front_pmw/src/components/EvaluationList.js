import React from 'react';
import {
    Card,
    Row,
    Col,
    Container,
    Button
} from 'react-bootstrap';
import { Icon } from '@iconify/react';

export const EvaluationList = () => {
    return (
        <div style={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)" }}>
            <Container style={{ padding: "160px 0 100px 0" }}>
                <Row xs={1} md={1} lg={1} className='g-4'>
                    <Col>
                        <Card className='h-100 p-3 border-0' style={{ backgroundColor: "rgb(72,74,78, 0.6)" }}>
                            <div className='d-flex flex-row justify-content-between align-items-center'>
                                <div>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                </div>
                                <div>
                                        <Icon icon="carbon:port-input" width="32" height="32" />
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}