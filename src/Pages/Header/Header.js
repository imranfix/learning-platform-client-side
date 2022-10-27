import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaConnectdevelop } from "react-icons/fa";
import './Header.css';


const Header = () => {
    return (
        <div>
             <Navbar collapseOnSelect
             className='mb-4'
              expand="lg"
               bg="dark" 
               variant="dark">
      <Container>
        <Navbar.Brand className='fs-4'>
            <Link to="/courses"> 
            <span className='d-flex justify-between text-decoration-none  text-white'>
                <FaConnectdevelop></FaConnectdevelop> Development-Programme</span>
             </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='m-3 text-white text-decoration-none' to="/courses">Courses</Link>
            <Link className='m-3 text-white text-decoration-none' to="/faq">FAQ</Link>
            <Link className='m-3 text-white text-decoration-none' to="/blog">Blog</Link>
            <Link className='m-3 text-white text-decoration-none' to="/register">Register</Link>
            <Link className='m-3 text-white text-decoration-none' to="/login">Login</Link>
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;