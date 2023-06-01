import React, { useState } from "react";
import { Container, Card, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { Icon } from '@iconify/react';

export const PricingPlans = () => {
    // Define an array of plans with their properties
    const plans = {
        // Plans for persons
        person: [
            {
                title: "Básico",
                price: {
                    monthly: "$0",
                    yearly: "$0",
                },
                features: ["Acceso a todos los cursos hasta el 30% de avance", "Sin certificación"],
                button: "Gratis",
                variant: "primary",
                class: "pricing-plan-basic",
                icon: "mdi:cube-outline",
                popular: false,
            },
            {
                title: "Premium",
                price: {
                    monthly: "$115.000",
                    yearly: "$1'380.000",
                },
                features: ["Todo lo del plan basic", "Acceso completo a los cursos de nivel introductorios", "Certificación al completarlos", "Retroalimentación de resultados", "Visibilidad a empresas"],
                button: "Comprar ahora",
                variant: "success",
                class: "pricing-plan-pro pricing-card-highlighted",
                icon: "mdi:trophy",
                popular: true,
            },
            {
                title: "Platinum",
                price: {
                    monthly: "$200.000",
                    yearly: "$2'400.000",
                },
                features: ["Todo lo del plan pro", "Acceso completo a los cursos de nivel avanzado", "Certificación al completarlos", "Soporte por email"],
                button: "Comprar ahora",
                variant: "warning",
                class: "pricing-plan-enterprise",
                icon: "mdi:wallet-giftcard",
                popular: false,
            },
        ],
        // Plans for companies
        company: [
            {
                title: "Básico",
                price: {
                    monthly: "$600.000",
                    yearly: "$7'200.000",
                },
                features: ["Hasta 10 personas", "Acceso a todos los cursos", "Certificación a cada empleado", "Retroalimentación de resultados", "Soporte por email"],
                button: "Gratis",
                variant: "primary",
                class: "pricing-plan-basic",
                icon: "mdi:cube-outline",
                popular: false,
            },
            {
                title: "Premium",
                price: {
                    monthly: "$1'000.000",
                    yearly: "$12'000.000",
                },
                features: ["Hasta 20 personas", "Acceso a todos los cursos", "Certificación a cada empleado", "Retroalimentación de resultados", "Soporte por email"],
                button: "Comprar ahora",
                variant: "success",
                class: "pricing-plan-pro pricing-card-highlighted",
                icon: "mdi:trophy",
                popular: true,
            },
            {
                title: "Platinum",
                price: {
                    monthly: "$1'800.000",
                    yearly: "$21'600.000",
                },
                features: ["Hasta 50 personas", "Acceso a todos los cursos", "Certificación a cada empleado", "Retroalimentación de resultados", "Soporte por email"],
                button: "Comprar ahora",
                variant: "warning",
                class: "pricing-plan-enterprise",
                icon: "mdi:wallet-giftcard",
                popular: false,
            },
        ]
    };

    // Define a state variable to store the selected value for the period
    const [period, setPeriod] = useState("monthly");

    // Define a handler function to update the state for the period
    const handlePeriodChange = (val) => {
        setPeriod(val);
    };

    // Define a state variable to store the selected value for the type of client
    const [type, setType] = useState("person");

    // Define a handler function to update the state for the type of client
    const handleTypeChange = (val) => {
        setType(val);
    };

    // Render a card for each plan
    return (
        <div style={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)" }}>
            <Container style={{ padding: "160px 0 100px 0" }} className="pricing-plans">
                <h5 className="text-center pricing-table-subtitle">PLAN DE PRECIOS</h5>
                <h1 className="text-center pricing-table-title">Tabla de Precios</h1>
                {/* Render a toggle button group to select the type of client */}
                <div className="d-flex justify-content-center">
                    <ToggleButtonGroup
                        type="radio"
                        name="options-type"
                        value={type}
                        onChange={handleTypeChange}
                        className="mb-3 toggle-button-group"
                    >
                        <ToggleButton id="person" value={"person"} variant="outline-light">
                            Persona
                        </ToggleButton>
                        <ToggleButton id="company" value={"company"} variant="outline-light">
                            Empresa
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                {/* Render a toggle button group to select monthly or yearly */}
                <div className="d-flex justify-content-center">
                    <ToggleButtonGroup
                        type="radio"
                        name="options-period"
                        value={period}
                        onChange={handlePeriodChange}
                        className="mb-3 toggle-button-group"
                    >
                        <ToggleButton id="monthly" value={"monthly"} variant="outline-light">
                            Mensual
                        </ToggleButton>
                        <ToggleButton id="yearly" value={"yearly"} variant="outline-light">
                            Anual
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div className="row">
                    {plans[type].map((plan) => (
                        <div className="col-md-4" key={plan.title}>
                            <Card className={'pricing-card ' + plan.class}>
                                <Card.Body>
                                    <Icon icon={plan.icon} className="pricing-plan-icon" />
                                    <Card.Title className="pricing-plan-title">{plan.title}</Card.Title>
                                    <Card.Subtitle className="text-center pricing-plan-cost">
                                        {plan.price[period]}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        <ul className="pricing-plan-features">
                                            {plan.features.map((feature) => (
                                                <li key={feature}><hr />{feature}</li>
                                            ))}
                                        </ul>
                                    </Card.Text>
                                    <Button className="pricing-plan-purchase-btn">{plan.button}</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
