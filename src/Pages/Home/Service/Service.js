import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Service.css'
const Service = ({service}) => {
    const {name, description, img} = service;
    return (
        <div className="">
            <Row>          
                 <Col className="">
                    <Card className="service">
                        <Card.Img variant="top" className="image" src={img} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        </Card.Body>
                        <Button variant="primary">Show Details</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Service;