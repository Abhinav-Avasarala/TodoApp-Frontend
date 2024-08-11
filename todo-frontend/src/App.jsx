import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import TimeBlockBar from './components/Timeblocks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container className="d-flex flex-column container">
      <Row className="mb-5">
        <Col>
          <h1 className="text-center">TaskGPT</h1>
        </Col>
      </Row>
      <Row className="flex-grow-1 mb-3">
      <Col md={4}>
          <h2>Total Time</h2>
          <TimeBlockBar />
        </Col>
        <Col md={4}>
          <h2>Tasks</h2>
        </Col>
        <Col md={4}>
          <h2>AI-Generated Schedule</h2>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button variant="success" size="lg">Generate Schedule</Button>
        </Col>
      </Row>

      
    </Container>
  );
}

export default App;
