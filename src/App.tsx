import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import { themeContext } from './context/themeContext';
import { posts } from './data/Posts';


function App() {
  const { currentTheme } = React.useContext(themeContext);

  return (
    <Container fluid style={{ backgroundColor: currentTheme === 'light' ? '#fff' : '#000' }}>
      <Row>
        <Header />
      </Row>
      <Row className='mx-5'>
        <Col>
          <Posts posts={posts} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
