import React from 'react';
import './Service.css';

const Service = (props) => {
    const { img, courses, websiteName, webAddress, phone } = props;
    return (
        <div>
            <div className="fs-2 sites col-lg-10 my-4 mx-auto ">
                <img className="rounded my-2" src={img} alt="" />
                <h3>{websiteName}</h3>
                <p>Courses: {courses} </p>
                <p>Contact: {phone} </p>
                <a target="_blank" class="btn btn-primary" href={webAddress} role="button">Visit Site</a>
            </div>
        </div>
    );
};

export default Service;