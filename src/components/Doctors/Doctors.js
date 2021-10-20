import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import doctorimg from "../../images/checkup.svg";
import "./Doctors.css";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("./doctor.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div>
      <div className='d-flex align-content-center justify-content-center doctor'>
        <h1 className='m-5 p-5 text-white'>Doctor List</h1>
        <img className='w-50 imagedoc' src={doctorimg} alt='' />
      </div>
      <div className='container imagedoc  service-container'>
        {doctors.map((doctor) => (
          <Doctor key={doctors.id} Doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
