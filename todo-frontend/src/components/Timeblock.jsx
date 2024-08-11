import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const CompactTimeBock = ({ block, color = 'success' }) => {
  return (
    <Card style={{ border: 'none', boxShadow: 'none', fontSize: '0.8rem' }}>
      <Card.Body className="p-1">
        <Row noGutters className="align-items-center">
          <Col className={`bg-${color} text-white p-1`}>
            <span className="font-weight-bold">{block}</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CompactTimeBock;