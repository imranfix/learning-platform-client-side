import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [courses, setCourses] = useState([]);

useEffect( () =>{
    fetch('http://localhost:5000/news-courses')
    .then(res => res.json())
    .then(data => setCourses(data))
}, [])


    return (
        <div>
           <h5>All Course: {courses.length}</h5> 
           <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/course/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>

        </div>
    );
};

export default LeftSide;