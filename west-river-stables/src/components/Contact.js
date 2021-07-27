import React from 'react';
import youngstudentshowing from '../assets/images/youngstudentshowing.jpeg';
import './Contact.css'

function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      <div className='background-image' style={{ backgroundImage: `url(${youngstudentshowing})` }} alt="Horse">
      </div>
    </>
  );
};

export default Contact;
