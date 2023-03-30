import React from 'react';
import {
  Card,
  Row,
  Col,
  Container
} from 'react-bootstrap';

export const UsersList = () => {
  return (
    <Container style={{ padding: "160px 0 100px 0", color: "black"}}>
      <Row xs={1} md={2} lg={3} className='g-4'>
        <Col>
          <Card className='h-100'>
            <Card.Img
              src='https://mdbootstrap.com/img/new/standard/city/044.webp'
              alt='...'
              position='top'
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='h-100'>
            <Card.Img
              src='https://mdbootstrap.com/img/new/standard/city/043.webp'
              alt='...'
              position='top'
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='h-100'>
            <Card.Img
              src='https://mdbootstrap.com/img/new/standard/city/042.webp'
              alt='...'
              position='top'
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                card has even longer content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='h-100'>
            <Card.Img
              src='https://mdbootstrap.com/img/new/standard/city/044.webp'
              alt='...'
              position='top'
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='h-100'>
            <Card.Img
              src='https://mdbootstrap.com/img/new/standard/city/043.webp'
              alt='...'
              position='top'
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='h-100'>
            <Card.Img
              src='https://mdbootstrap.com/img/new/standard/city/042.webp'
              alt='...'
              position='top'
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                card has even longer content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}