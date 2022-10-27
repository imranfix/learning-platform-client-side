import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import './Home.css';

const Home = () => {
    const allCourses = useLoaderData();

    return (
        <div className='card-grid'>
            {/* <h3>Programming course Home: {allCourses.length}</h3> */}
            {
               allCourses.map (course => <CourseSummaryCard
               key={course._id}
               course={course}
               ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Home;