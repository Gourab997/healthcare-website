import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = ({ Service }) => {
  const { service_name, image, short_details, id } = Service;
  return (
    <div className='about'>
      {" "}
      <div id='cards_landscape_wrap-2'>
        <div class='container'>
          <div class='row'>
            <div class=''>
              <div class='card-flyer'>
                <div className='text-box'>
                  <div className='image-box'>
                    <img src={image} alt='' />
                  </div>

                  <div className='text-container'>
                    <h6>{service_name}</h6>
                    <p>{short_details}</p>
                  </div>
                  <div>
                    <Link to={`/details/${id}`}>
                      <Button className='m-3'>See More</Button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
