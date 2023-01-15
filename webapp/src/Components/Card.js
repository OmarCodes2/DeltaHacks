import React from 'react';
import { useState } from 'react';
import '../Card.css'
import oneprofile from "../oneprofile.png";
import twoprofile from "../twoprofile.png"

function Card({name,image_id,body}) {
 
    return (
        <div className='card-container'> 
            <div className="image-container">
                <img src={image_id === 1 ? oneprofile : twoprofile} />
            </div>
            <div className="card-title">
                <h2>{name}</h2>
            </div>
        </div>
    )
}
 
export default Card;