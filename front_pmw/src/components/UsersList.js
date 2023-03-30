import React from 'react';
import {
  Card,
  Row,
  Col,
  Container
} from 'react-bootstrap';
import { Icon } from '@iconify/react';

export const UsersList = () => {
  return (
    <div style={{background: "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)"}}>
    <Container style={{ padding: "160px 0 100px 0" }}>
      <Row xs={1} md={2} lg={3} className='g-4'>
        <Col>
          <Card className='h-100 p-3 border-0' style={{backgroundColor: "rgb(72,74,78, 0.6)"}}>
            <div className='d-flex flex-column justify-content-end align-items-end pb-3'>
              <span style={{ fontWeight: '500' }}>Profesión</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img className='text-center' src="https://i.imgur.com/wvxPV9S.png" height="100px"
                width="100px" alt='' style={{ width: "100px", border: '3px solid #fff', borderRadius: '50%'}} />
            </div>
            
            <Card.Body>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <span className='text-center' style={{ fontWeight: '100' }}>Username</span>
                <a className='text-muted' href='#'>@username</a>
              </div>
              <div className='d-flex flex-row justify-content-evenly align-items-center pt-2'>
                <Icon style={{color: '#D6D8DD'}} icon="ic:baseline-facebook" width="32" height="32"/>
                <Icon style={{color: '#D6D8DD'}} icon="mdi:linkedin" width="32" height="32"/>
                <Icon style={{color: '#D6D8DD'}} icon="ic:baseline-email" width="32" height="32" />

              </div>
              <Card.Text className='mt-3' style={{maxHeight: '200px', overflowY: 'auto', overflowX: 'none'}}>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='h-100 p-3' style={{backgroundColor: "rgb(72,74,78, 0.6)"}}>
            <div className='d-flex flex-column justify-content-end align-items-end pb-3'>
              <span style={{ fontWeight: '500' }}>Profesión</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img className='text-center' src="https://i.imgur.com/wvxPV9S.png" height="100px"
                width="100px" alt='' style={{ width: "100px", border: '3px solid #fff', borderRadius: '50%'}} />
            </div>
            
            <Card.Body>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <span className='text-center' style={{ fontWeight: '100' }}>Username</span>
                <a className='text-muted' href='#'>@username</a>
              </div>
              <div className='d-flex flex-row justify-content-evenly align-items-center pt-2'>
                <Icon style={{color: '#D6D8DD'}} icon="ic:baseline-facebook" width="32" height="32"/>
                <Icon style={{color: '#D6D8DD'}} icon="mdi:linkedin" width="32" height="32"/>
                <Icon style={{color: '#D6D8DD'}} icon="ic:baseline-email" width="32" height="32" />

              </div>
              <Card.Text className='mt-3' style={{maxHeight: '200px', overflowY: 'auto', overflowX: 'none'}}>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='h-100 p-3' style={{backgroundColor: "rgb(72,74,78, 0.6)"}}>
            <div className='d-flex flex-column justify-content-end align-items-end pb-3'>
              <span style={{ fontWeight: '500' }}>Profesión</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img className='text-center' src="https://i.imgur.com/wvxPV9S.png" height="100px"
                width="100px" alt='' style={{ width: "100px", border: '3px solid #fff', borderRadius: '50%'}} />
            </div>
            
            <Card.Body>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <span className='text-center' style={{ fontWeight: '100' }}>Username</span>
                <a className='text-muted' href='#'>@username</a>
              </div>
              <div className='d-flex flex-row justify-content-evenly align-items-center pt-2'>
                <Icon style={{color: '#D6D8DD'}} icon="ic:baseline-facebook" width="32" height="32"/>
                <Icon style={{color: '#D6D8DD'}} icon="mdi:linkedin" width="32" height="32"/>
                <Icon style={{color: '#D6D8DD'}} icon="ic:baseline-email" width="32" height="32" />

              </div>
              <Card.Text className='mt-3' style={{maxHeight: '200px', overflowY: 'auto', overflowX: 'none'}}>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='h-100 p-3' style={{backgroundColor: "rgb(72,74,78, 0.6)"}}>
            <div className='d-flex flex-column justify-content-end align-items-end pb-3'>
              <span style={{ fontWeight: '500' }}>Profesión</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img className='text-center' src="https://i.imgur.com/wvxPV9S.png" height="100px"
                width="100px" alt='' style={{ width: "100px", border: '3px solid #fff', borderRadius: '50%'}} />
            </div>
            
            <Card.Body>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <span className='text-center' style={{ fontWeight: '100' }}>Username</span>
                <a className='text-muted' href='#'>@username</a>
              </div>
              <div className='d-flex flex-row justify-content-evenly align-items-center pt-2'>
                <Icon style={{color: '#D6D8DD'}} icon="ic:baseline-facebook" width="32" height="32"/>
                <Icon style={{color: '#D6D8DD'}} icon="mdi:linkedin" width="32" height="32"/>
                <Icon style={{color: '#D6D8DD'}} icon="ic:baseline-email" width="32" height="32" />

              </div>
              <Card.Text className='mt-3' style={{maxHeight: '200px', overflowY: 'auto', overflowX: 'none'}}>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='h-100 p-3' style={{backgroundColor: "rgb(72,74,78, 0.6)"}}>
            <div className='d-flex flex-column justify-content-end align-items-end pb-3'>
              <span style={{ fontWeight: '500' }}>Profesión</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <img className='text-center' src="https://i.imgur.com/wvxPV9S.png" height="100px"
                width="100px" alt='' style={{ width: "100px", border: '3px solid #fff', borderRadius: '50%'}} />
            </div>
            
            <Card.Body>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <span className='text-center' style={{ fontWeight: '100' }}>Username</span>
                <a className='text-muted' href='#'>@username</a>
              </div>
              <div className='d-flex flex-row justify-content-evenly align-items-center pt-2'>
                <Icon style={{color: '#D6D8DD'}} icon="ic:baseline-facebook" width="32" height="32"/>
                <Icon style={{color: '#D6D8DD'}} icon="mdi:linkedin" width="32" height="32"/>
                <Icon style={{color: '#D6D8DD'}} icon="ic:baseline-email" width="32" height="32" />

              </div>
              <Card.Text className='mt-3' style={{maxHeight: '200px', overflowY: 'auto', overflowX: 'none'}}>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}