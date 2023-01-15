import React from 'react'
import Circle from './Circle';
import { useState, useEffect } from 'react';
import '../progress.css';

const Progress = ({ page }) => {
  const[circle] = useState(4);
  // const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setWidth(100/(circle-1)*page)
  }, [circle, page])

  console.log(page)

  const arr=[];
  for (let i=0; i<circle; i++) {
      arr.push(<Circle classname={i<=page ? true : false} key={i}></Circle>);
    }
    
  return (
    <div className="container">
      <div className="content"> 
        <div className="progressbar">
          <div className="progress"  style = {{width:width+"%"}}></div>
          {arr}
          </div>
      </div>
    </div>  
  )
}

export default Progress;
