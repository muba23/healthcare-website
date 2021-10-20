import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const {error, getName, getEmail, userRegistration, getPassword } = useAuth();
    return (
        <div>
            <h3>Please Register</h3>
            <div>
            <Form className="form mt-4">
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <div>Or</div>
                <Button variant="warning">
                    Sign in Using Google
                </Button>
            </Form>
            </div>
            {/* <p className="mt-3">
        Already registered? <Link to="/login">Log in</Link> here{" "}
      </p> */}
        </div>
    );
};

export default Register;