import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const CompactTask = ({ task, duration, priority, color = 'success' }) => {
  return (
    <Card style={{ border: 'none', boxShadow: 'none', fontSize: '0.8rem' }}>
      <Card.Body className="p-1">
        <Row noGutters className="align-items-center">
          <Col xs={7} className={`bg-${color} text-white p-1`}>
            <span className="font-weight-bold">{task}</span>
          </Col>
          <Col xs={2} className="bg-warning p-1 text-center">
            <small>{priority}</small>
          </Col>
          <Col xs={3} className="bg-info text-white p-1 text-center">
            <small>{duration}</small>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CompactTask;