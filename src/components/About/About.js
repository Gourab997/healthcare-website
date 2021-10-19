import React from "react";

import about from "../../images/doctor.svg";
import doctor from "../../images/profile.svg";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className='m-5'>
        <h1 className='text-warning'>About us</h1>
        <img className='w-50' src={about} alt='' />
      </div>

      <div className='my-5'>
        <h3 className='text-danger text-start m-4'>Heath Home LTD</h3>
        <p className='p-3 text-warp'>
          Heath Home Limited is a tertiary care hospital and the leading
          contributor of private healthcare services in Bangladesh. This has
          been achieved only through consistent commitment to improve the lives
          of people through utmost service excellence since its inception on
          16th December, 2006. Square Hospital is one of the ventures of Square
          Group which is the top business group of the country. The reputation
          of Square Hospital is the result of quality clinical outcome and
          comprehensive care, made achievable through world class integrated
          healthcare facilities by highly trained professionals. Thus, Heath
          Home Square Hospitals strives to meet patients’ standards through
          quality healthcare and making a difference in their lives.
        </p>
        <img className='w-50' src={doctor} alt='' />
        <div className='m-5 '>
          <h4 className='text-start'>MISSION</h4>
          <ul className='text-start p-5'>
            <li>Adhering to high ethical and moral standards at all times</li>
            <li>Making service quality top priority in all we do</li>
            <li>Training staff to work within a quality care environment</li>
            <li>Providing quality health care service in all processes</li>
            <li>Delivering customer satisfaction through quality service</li>
          </ul>
        </div>

        <div>
          <h4 className='text-danger'>Vision</h4>
          <p className='text-success text-italic'>
            "Make HeathHome synonymous with quality heath care"
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
