import React from 'react';
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
          <Navbar bg="info" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Theme Switcher</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
          </Navbar>        
      </Row>
      <Row className='my-3'>
        <Col>
          <h3> Posts </h3>
          <Card className='mt-3'>
            <Card.Header as="h5">Featured</Card.Header>
              <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
              </Card.Body>
          </Card>        
        </Col>
      </Row>
    </Container>
  );
}

export default App;
