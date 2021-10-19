import React from "react";
import done from "../../images/suceess.svg";
const Success = () => {
  return (
    <div className='m-5'>
      <img className='w-50' src={done} alt='' />
      <h4 className='text-danger m-5'>We Will Contact You Soon</h4>
    </div>
  );
};

export default Success;
