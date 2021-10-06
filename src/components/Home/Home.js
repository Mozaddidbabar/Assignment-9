import React, { useEffect, useState } from 'react';
import Courses from '../../Courses/Courses';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./menu.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="row">
                {
                    courses.map(courses => <Courses
                        key={courses.key}
                        name={courses.name}
                        price={courses.price}
                        img={courses.img}
                    ></Courses>)
                }

            </div>
        </div>
    );
};

export default Home;
