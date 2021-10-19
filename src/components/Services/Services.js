import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("healthcare.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div id='services'>
      <h1 className=' m-5 text-success'>Services</h1>
      <div className='container service-container'>
        {services.map((service) => (
          <Service key={service.id} Service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
