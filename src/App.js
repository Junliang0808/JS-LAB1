import React, { useState } from 'react';
import Greeting from "./conponents/greeting";

import './App.css';

export default () => {
  const [name, setName] = useState();

  return (
    <>
      <input
        onChange={({target: {value}}) => setName(value)}
        placeholder="Enter your name"
      />
      <Greeting name={name}/>
   

    </>
  );
};