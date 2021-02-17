import React from 'react'

export default function Filter(props){
    const { cardSet, checked, check} = props;
    
        return (
            <ul>   
                <li>
                    {cardSet}
                    <input type="checkbox" name={cardSet} checked={checked === cardSet} onChange={() => check(cardSet)}></input>
                </li>
                
        </ul>
    ) 
    
    
}