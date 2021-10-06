import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Services from '../components/Services/Services';
import './Courses.css';

const Courses = (props) => {
    const { name, img, price } = props;
    return (
        <div className="my-2">
            <div className="courses col-lg-10 my-5 mx-auto ">
                <img className="img-fluid my-2" src={img} alt="" />
                <h4 className="text-dark">Course Name: {name}</h4>
                <p className="fs-1 fw-bold">Price: ${price} </p>
                <Link to="/services" className="linked">Visit</Link>

            </div>
        </div>
    );
};

export default Courses;