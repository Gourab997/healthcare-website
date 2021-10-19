import React from "react";
import warning from "../../images/waring.svg";
const NotFound = () => {
  return (
    <div className='m-5'>
      <img className='w-25' src={warning} alt='' />
      <h1 className='text-danger m-5'>404 Not Found</h1>
    </div>
  );
};

export default NotFound;
