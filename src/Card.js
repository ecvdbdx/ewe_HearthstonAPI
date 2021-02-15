import React from 'react'

export default function Cards(props){
    const { name, cardId, cardSet, img } = props;

    // const image = img ? <img alt="card-desc" src={img} /> : undefined;
    const image = img && <img alt="card-desc" src={img} />;

    return (
        <li>   
        {image}
        {name} {cardId} {cardSet}
        </li>
    ) 
}