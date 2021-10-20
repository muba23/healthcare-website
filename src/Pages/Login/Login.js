import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h3>This is login</h3>
            <Form className="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <div>Or</div>
                <Button variant="warning" type="submit">
                    Sign in Using Google
                </Button>
            </Form>
        </div>
    );
};

export default Login;