import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const CourseCatagory = () => {
    const catagoryCourses = useLoaderData();
    return (
        <div>
            <h3>Courses : {catagoryCourses.length}</h3>
            {
                catagoryCourses.map(course => <CourseSummaryCard
                key={course._id}
                course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default CourseCatagory;