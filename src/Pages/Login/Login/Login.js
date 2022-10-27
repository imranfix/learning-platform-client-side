import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';






const Login = () => {
const [error, setError] = useState('');

const {signIn, setLoading} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();

const from = location.state?.from?.pathname || '/';

const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      form.reset();
      setError('');
      if(user.emailVerified){
        navigate(from, {replace: true});
      }
      else{
        toast.error('Your email is not verified. Please verify your email address.')
      }

    })
    .catch(error => {
      console.error(error)
      setError(error.message);
    })
    .finally(() =>{
      setLoading(false);
    })

  }






    return (
        <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          name='email'
          type="email" placeholder="email address" required />
    
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          name='password'
          type="password" placeholder="password" required />
        </Form.Group>

        <Button className='' variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className='text-danger'>
         {error}
        </Form.Text>
      </Form>
       
      </Card.Body>
    </Card>
    );
};

export default Login;