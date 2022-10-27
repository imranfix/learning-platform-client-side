import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Courses = () => {
    const allCourses = useLoaderData();

    return (
        <div>
            <h5>this is Courses</h5>
        </div>
    );
};

export default Courses;