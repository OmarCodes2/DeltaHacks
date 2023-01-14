import React from 'react'
import Circle from './Circle';
import { useState } from 'react';
import Progress from './progress.css';

const App = () => {
  const[circle] = useState(4);
  const arr=[];
  for (let i=0; i<circle; i++) {
    arr.push(<Circle className="circle">{i}</Circle>)
    ;

  }
  return (
    <div className="container">
    <div className="content"> 
    <div className="progressbar">
    <div className="progress"></div>
    {arr}
    </div>
    <div className="button">
    <button className="prev btn">Prev</button>
    <button className="next btn">Next</button>
    </div>
    </div>
    </div>  
  );
}

export default App;
