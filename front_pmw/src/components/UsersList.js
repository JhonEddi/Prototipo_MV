import React from 'react';
import {
  Card,
  Row,
  Col,
  Container
} from 'react-bootstrap';
import { Icon } from '@iconify/react';

const cardsInfo = [
  {
    profesion: "Programador Full Stack",
    imagen: "https://i.imgur.com/QapGaDV.jpeg",
    username: "Pedro",
    userhandle: "@pedro_code",
    redes: ["mdi:github", "mdi:linkedin", "ic:baseline-email"],
    texto: "Soy un programador full stack con más de 5 años de experiencia en el desarrollo de sitios y aplicaciones web. Domino HTML, CSS, JavaScript, React, Node.js y MongoDB. Me gusta aprender nuevas tecnologías y resolver problemas complejos. Si tienes un proyecto web que necesites desarrollar, estoy a tu disposición.",
    color: "limegreen",
    nota: 4.2,
  },
  {
    profesion: "Diseñador UI/UX",
    imagen: "https://i.imgur.com/JRKB5oc.jpeg",
    username: "Laura",
    userhandle: "@laura_design",
    redes: ["mdi:github", "mdi:linkedin", "ic:baseline-email"],
    texto: "Soy una diseñadora UI/UX que se encarga de crear interfaces de usuario atractivas y funcionales para sitios y aplicaciones web. Me gusta aplicar los principios de diseño centrado en el usuario y realizar investigaciones, prototipos y pruebas. Tengo experiencia en herramientas como Figma, Sketch y Adobe XD. Si necesitas un diseño que mejore la experiencia de tus usuarios, no dudes en contactarme.",
    color: "limegreen",
    nota: 4.5,
  },
  {
    profesion: "Analista de Datos",
    imagen: "https://i.imgur.com/qKzM5bl.jpeg",
    username: "Carlos",
    userhandle: "@carlos_data",
    redes: ["mdi:github", "mdi:linkedin", "ic:baseline-email"],
    texto: "Soy un analista de datos que se dedica a extraer, procesar y visualizar datos para obtener insights y tomar mejores decisiones. Me gusta trabajar con grandes volúmenes de datos y aplicar técnicas de estadística y machine learning. Tengo experiencia en herramientas como Python, SQL, R, Tableau y Power BI. Si quieres aprovechar el potencial de tus datos, no dudes en contactarme.",
    color: "limegreen",
    nota: 3.8,
  },
  {
    profesion: "Tester de Software",
    imagen: "https://i.imgur.com/UxNm64k.jpeg",
    username: "Ana",
    userhandle: "@ana_test",
    redes: ["mdi:github", "mdi:linkedin", "ic:baseline-email"],
    texto: "Soy una tester de software que se encarga de verificar la calidad y el funcionamiento de los productos de software. Me gusta realizar pruebas manuales y automatizadas para detectar errores, bugs y vulnerabilidades. Tengo experiencia en herramientas como Selenium, Postman, JMeter y Cucumber. Si necesitas asegurar la calidad de tu software, no dudes en contactarme.",
    color: "red",
    nota: 2.7,
  },
  {
    profesion: "DevOps Engineer",
    imagen: "https://i.imgur.com/KYTJocv.jpeg",
    username: "Juan",
    userhandle: "@juan_devops",
    redes: ["mdi:github", "mdi:linkedin", "ic:baseline-email"],
    texto: "Soy un DevOps engineer que se encarga de automatizar y optimizar los procesos de desarrollo, integración, despliegue y monitoreo de software. Me gusta trabajar con herramientas como Docker, Kubernetes, Jenkins, Ansible y AWS. Si quieres mejorar la eficiencia y la seguridad de tu software, no dudes en contactarme.",
    color: "limegreen",
    nota: 3.4,
  },
  {
    profesion: "Scrum Master",
    imagen: "https://i.imgur.com/liLnjOn.png",
    username: "Luisa",
    userhandle: "@luisa_scrum",
    redes: ["mdi:github", "mdi:linkedin", "ic:baseline-email"],
    texto: "Soy una Scrum master que se encarga de facilitar y coordinar el trabajo en equipo bajo la metodología ágil Scrum. Me gusta ayudar a los equipos a definir sus objetivos, planificar sus sprints, resolver sus impedimentos y mejorar su rendimiento. Tengo experiencia en herramientas como Jira, Trello y Slack. Si quieres implementar Scrum en tu proyecto, no dudes en contactarme.",
    color: "limegreen",
    nota: 3.8,
  },
  // Puedes agregar más objetos con la misma estructura para cada card
];

export const UsersList = () => {
  return (
    <div style={{ background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)" }}>
      <Container style={{ padding: "160px 0 160px 0" }}>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {cardsInfo.map(card => ( // Iteramos sobre cada elemento del array cardsInfo
            <Col key={card.userhandle}> 
              <Card className='h-100 p-3' style={{ border: "2px solid "+card.color, backgroundColor: "rgb(72,74,78, 0.6)",  }}>
                <div className='d-flex flex-column justify-content-end align-items-end pb-3'>
                  <span style={{ fontWeight: '500' }}>{card.profesion}</span>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                  <img className='text-center' src={card.imagen} height="100px"
                    width="100px" alt='' style={{ width: "100px", border: '3px solid #fff', borderRadius: '50%' }} />
                </div>

                <Card.Body>
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <span className='text-center' style={{ fontWeight: '100' }}>{card.username}</span>
                    <a className='text-muted' href='##'>{card.userhandle}</a>
                  </div>
                  <div className='d-flex flex-row justify-content-evenly align-items-center pt-2'>
                    {card.redes.map(red => ( // Iteramos sobre cada elemento del array redes
                      <Icon key={red} style={{ color: '#D6D8DD' }} icon={red} width="32" height="32" />
                    ))}
                  </div>
                  <Card.Text className='mt-3' style={{ maxHeight: '200px', overflowY: 'auto', overflowX: 'none' }}>
                    {card.texto}
                  </Card.Text>
                </Card.Body>
                <div className='d-flex flex-column justify-content-end align-items-end'>
                  <span style={{ fontWeight: '500', color: '#f8f9fa' }}>{card.nota>3.0?"Aprobo el curso":"Perdio el curso"}</span>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}