import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id, name, description, img} = service;
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
                        <Link to={`/details/${id}`}><Button className="mb-3" variant="primary">Show Details</Button></Link>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Service;