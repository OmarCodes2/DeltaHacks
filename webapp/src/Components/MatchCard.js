import React from 'react';

function MatchCard({name, image_id, bio, email}) {
 
    return (
        <div className="card-container"> 
            <div className="card-image">
                <img src={image_id === 1 ? "https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" : "https://www.pngkit.com/png/full/950-9507730_635px-circle-dog-catches-something.png"} />
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