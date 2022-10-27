import React from 'react';
import { useState } from 'react';
import { useContext, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Profile = () => {

const {user} = useContext(AuthContext);
const [name, setName] = useState(user.displayName);
const photoURLRef = useRef(user.photoURL);

const handleSubmit = event =>{
    event.preventDefault();
    console.log(photoURLRef.current.value);
}

const handleNameChange = event =>{
    setName(event.target.value);
}



    return (
        <div>
             <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </div>
    );
};

export default Profile;