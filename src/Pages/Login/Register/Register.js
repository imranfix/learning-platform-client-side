import toast  from 'react-hot-toast';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const Register = () => {
    const [error, setError] = useState('');

    const [accepted, setAccepted] = useState(false);
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name, photoURL);
            handleEmailVerification();
            toast.success('Please verify your email address.')
        })
        .catch( error =>{
            console.error(error);
            setError(error.message);
        })
    }


    const handleUpdateUserProfile = (name, photoURL)=>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
        .then( () =>{})
        .catch(error => console.error(error))
    }

    const handleEmailVerification = () =>{
        verifyEmail()
        .then( () =>{})
        .catch (error => console.error(error))
    }

    const handleAccepted = evnet =>{
        setAccepted(evnet.target.checked);
    }


    return (
        <div className=''>
             <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
            name='text'
            type="name" placeholder="your name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
            name='photoURL'
            type="text" placeholder="photoUrl"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            name='email'
            type="email" placeholder="Enter email" required />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            name='password'
            type="password" placeholder="Password" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
        type="checkbox"
        onClick={handleAccepted}
        label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
      </Form.Group>
  
          <Button variant="primary" type="submit"
            disabled={!accepted}>
            Register
          </Button>
          <Form.Text className='text-danger'>
           {error}
           <p> Already you have an account ? Please <Link to="/login">Login</Link></p>
          </Form.Text>
        </Form>
         
        </Card.Body>
      </Card>
        </div>
    );
};

export default Register;