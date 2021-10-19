import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Doctor.css";
const Doctor = ({ Doctor }) => {
  console.log(Doctor);
  const { name, degree, dept, age, experience, image, fee } = Doctor;
  return (
    <div className='m-5'>
      <div className='container mt-5'></div>
      <div className='cards card h-100'>
        <div className='cards-header card-header'>
          <img src={image} alt='rover' />
        </div>
        <div className='cards-body card-body p-3'>
          <span className='tag tag-teal'>{dept} </span>
          <h4 className='pt-3'>{name}</h4>
          <p>{degree}</p>
          <h5 className='text-success'>Experience: {experience}</h5>
          <h3>Age: {age}</h3>
          <div className='user'>
            <div className='user-info'>
              <h6 className='ps-5'>{fee} Taka</h6>
            </div>
          </div>
          <div>
            <Link to='/success'>
              <Button>Take Appointment</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
