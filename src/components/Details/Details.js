import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Details.css";
const Details = () => {
  const { serviceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [singleDetails, setSingleDetails] = useState({});
  useEffect(() => {
    fetch("/healthcare.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  useEffect(() => {
    const found = serviceDetails.find((detail) => detail.id === serviceId);
    setSingleDetails(found);
  }, [serviceDetails]);
  return (
    <div>
      <Card className='bg-dark text-white '>
        <Card.Img src={singleDetails?.image} alt='Card image' />
        <Card.ImgOverlay>
          <Card.Title className='text-danger '>
            <h1> {singleDetails?.service_name} </h1>
          </Card.Title>
          <Card.Text className='details '>
            <h3 className='textColor text-wrap'> {singleDetails?.details} </h3>{" "}
          </Card.Text>
          <Link to='/success'>
            <Button>Booking</Button>
          </Link>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Details;
