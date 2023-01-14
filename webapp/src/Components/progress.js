import React from 'react'
import Circle from './Circle';
import { useState, useEffect } from 'react';
import '../progress.css';

const Progress = () => {
  const[circle] = useState(4);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
  setWidth(100/(circle-1)*active)
  }, [circle, active])
  console.log(active)
  const arr=[];
  for (let i=0; i<circle; i++) {
      arr.push(<Circle classname={i<=active ? true : false} key={i}></Circle>);
    }
    
  return (
    <div className="container">
    <div className="content"> 
    <div className="progressbar">
    <div className="progress"  style = {{width:width+"%"}}></div>
    {arr}
    </div>
    <div className="button">
    <button className="prev btn" disabled={active>0?false:true} onClick={()=>{active<=0?setActive(0):setActive(active-1)}}>Prev</button>
    <button className="next btn" disabled={active>=circle-1?true:false} onClick={()=>{active>=circle?setActive(circle):setActive(active+1)}}>Next</button>    
    </div>

    </div>
    </div>  
  )
}

export default Progress;
