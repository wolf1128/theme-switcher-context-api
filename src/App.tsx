import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import { posts } from './data/Posts';


function App() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row className='my-3'>
        <Col>
          <Posts posts={posts} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
