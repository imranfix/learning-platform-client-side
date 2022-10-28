import React from 'react';
import { Card } from 'react-bootstrap';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CourseSummaryCard.css';

const CourseSummaryCard = ({course}) => {
    const {image_url, name, price, ratings, details, _id} = course;
    return (
        <Card className='card-gird mb-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>Course Name: {name}</Card.Title>
        <Card.Text>
          {
            details.length > 30 ? 
            <p>{details.slice(0, 30) + '...'}<Link to={`/courseInfo/${_id}`}>Details more</Link> </p>
            :
            <p>{details}</p>
          }

        </Card.Text>
       <div className='d-flex align-items-center'>
       {/* <Button variant="primary">Details</Button> */}
       <p className='px-2'>Price: {price}</p>
       <p className=''><small className='d-flex align-items-center mx-4'> {ratings} <FaRegStar></FaRegStar> <FaRegStar></FaRegStar> </small></p>
       </div>
      </Card.Body>
    </Card> 
    );
};

export default CourseSummaryCard;