import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import {HashLink} from 'react-router-hash-link'
import './Header.css'


const Header = () => {
  const {user, logOut} = useAuth();
    return (
            <>
  <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
    <Container>
        <Navbar.Brand href="#home">WeCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto navItems">
            <NavLink as={HashLink} to="/home#home">Home</NavLink>
            <NavLink as={HashLink} to="/home#services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            {user?.email ? 
            <Button onClick={logOut} variant="light">Log Out</Button>:
            <NavLink to="/login">Login</NavLink>
            }
       </Nav>
       <Navbar.Text>
        Signed in as: <span style={{color: 'blue'}}>{user?.displayName}</span>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Header;