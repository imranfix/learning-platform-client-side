import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseInfo = () => {
  const courseInfo = useLoaderData()
  const {name, image_url, details} = courseInfo;
    return (
        <div>
            <h4 className='mb-4'>Course Details below:</h4>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>Programme Name: {name}</Card.Title>
        <Card.Text>
         Course Information: {details}
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CourseInfo;