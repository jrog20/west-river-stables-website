import React from 'react';
import rogerriding from '../assets/images/rogerriding.jpeg';
import './Login.css'

function Login() {
  return (
    <>
      <div className='background-image' style={{ backgroundImage: `url(${rogerriding})` }} alt="Login">
      </div>
      {/* <LoginForm /> */}
    </>
  );
};

export default Login;