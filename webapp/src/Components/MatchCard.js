import React from 'react';

function MatchCard({name, image, bio, email}) {
    return (
        <div className="card-container"> 
            <div className="card-image">
                <img src={image} />
            </div>
            <div className="card-text">
                <h2>{name}</h2>
                <h4>{bio}</h4>
                <p>Email: {email}</p>
            </div>
        </div>
    )
}
 
export default MatchCard;