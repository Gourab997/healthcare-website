import React from "react";

const Footer = () => {
  return (
    <div className='mt-5 pt-5'>
      <footer
        style={{ backgroundColor: "rgb(111, 86, 239)" }}
        className=' text-white text-center text-lg-start'
      >
        <div className='container p-4'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Heath Home</h5>

              <div className='col-md-5 col-12 mb-4 mb-md-0'>
                <div className='form-outline mb-4'>
                  <input
                    type='email'
                    id='form5Example25'
                    className='form-control'
                    placeholder='Email address for subscribe'
                  />
                </div>
              </div>
              <div className='col-auto mb-4 mb-md-0'>
                <button type='submit' className='btn btn-info mb-4'>
                  Subscribe
                </button>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contacts</h5>

              <ul className=' mb-0'>
                <li className=' list-unstyled'>
                  <p>
                    <i className='fas fa-home me-3'></i> 72 /1 Baridhara Dhaka ,
                    Bangladesh
                  </p>
                </li>
                <li className=' list-unstyled'>
                  <p>
                    <i className='fas fa-envelope me-3'></i>
                    Healthcare@hospital.com
                  </p>
                </li>
                <li className=' list-unstyled'>
                  <p>
                    <i className='fas fa-phone me-3'></i> 16333
                  </p>
                </li>
                <li className=' list-unstyled'>
                  <p>
                    <i className='fas fa-print me-3'></i> 02-86456942
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className='text-center p-3'
          style={{ "background-color": "#6749F9" }}
        >
          © 2021 Copyright:
          <i className='fas fa-heartbeat'></i> Home
        </div>
      </footer>
    </div>
  );
};

export default Footer;
