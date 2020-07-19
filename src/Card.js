import React from 'react';
import lol from  './images/firstProject.png'

function Card(props) {
    const { title, content } = props;

    return (
        <div className="card">
            <img src={lol} alt="tg" className="card-img" />
            <h2>{title}</h2>
            <p>{content} </p>
            <button>Voir le projet</button>
        </div>
    )
}

export default Card