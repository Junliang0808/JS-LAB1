import React, { Fragment } from 'react';
import '../App.css';

export default ({name}) => {
  return (
    <Fragment>
      <h1>Hi, {name}! Welcome to Georgian College!</h1>
  <h1>Today, your lucky number is {parseInt(Math.random()*99)}.</h1>
  <img src="OIP.jpg"/>
  
    </Fragment>
    
  );
};