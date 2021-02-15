import React from 'react'

export default function Cards(props){
    const { name, cardId, cardSet, img } = props;


    return (
        <>
            
        <img alt="card-desc" src={img}/>
        <ul>
        <li>{name} {cardId} {cardSet}</li>
        </ul>
        </>
    ) 
}