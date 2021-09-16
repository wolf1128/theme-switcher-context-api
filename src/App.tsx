import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header'
import Post from './components/Post'

function App() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row className='my-3'>
        <Col>
          <h3> Posts </h3>
          <Post />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
