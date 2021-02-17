import React from 'react'

export default function Filters(props){
    const { cardSet} = props;
    
        return (
            <ul>   
                <li>
                    {cardSet}
                    <input type="checkbox" name={cardSet}></input>
                </li>
                
        </ul>
    ) 
    
    
}