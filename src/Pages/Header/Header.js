import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaConnectdevelop } from "react-icons/fa";
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import {FaUser, FaMale} from 'react-icons/fa';



const Header = () => {

    const {user, logOut} = useContext(AuthContext);


    const handleLogOut = () =>{
        logOut()
        .then( () =>{})
        .catch( error => console.error(error))
    }



    return (
        <div>
             <Navbar collapseOnSelect
             className='mb-4'
              expand="lg"
               bg="dark" 
               variant="dark">
      <Container>
        <Navbar.Brand className='fs-4'>
            <Link className='text-decoration-none' to="/"> 
            <span className='d-flex justify-between   text-white'>
                <FaConnectdevelop></FaConnectdevelop> Development-Programme</span>
             </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='m-3 text-white text-decoration-none' to="/">Courses</Link>
            <Link className='m-3 text-white text-decoration-none' to="/faq">FAQ</Link>
            <Link className='m-3 text-white text-decoration-none' to="/blog">Blog</Link>
            {/* <Link className='m-3 text-white text-decoration-none' to="/register">Register</Link>
            <Link className='m-3 text-white text-decoration-none' to="/login">Login</Link> */}
          </Nav>

          <>
              {
                user?.uid ? 
              <>
                <span> {user?.displayName}
                <Button variant='light'  onClick={handleLogOut}>log out</Button>
                </span>
              </>
                :
                <>
                <Link className='text-decoration-none m-2' to="/login">Login</Link>
                <Link className='text-decoration-none m-2' to="/register">Register</Link>
                </>
              }

            </>

            <Link to="/profile">
              {user?.photoURL ?
              <Image
              style={{height:'40px'}}
              roundedCircle
              src={user.photoURL}>

              </Image>  
               :
               <FaUser></FaUser>
            }
            </Link>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;