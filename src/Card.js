import React from 'react'
import './Card.css';

export default function Cards(props){
    const { name, cardSet, img } = props;

    // const image = img ? <img alt="card-desc" src={img} /> : undefined;
    const image = img && <img alt="card-desc" src={img} />;
    if (image  === undefined) {
    return( <li className="card"><b>{name}</b> {cardSet}</li>)
    }
    else {
        return (
        <li>   
        {image}
        </li>
    ) 
    }
    
}