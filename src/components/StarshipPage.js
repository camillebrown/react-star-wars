import React from 'react'
import NumberFormat from 'react-number-format';

const StarshipPage = (params) => {
    console.log(params.location.state.data)
    let shipInfo = params.location.state.data
    return(
        <div>
            <h1>{shipInfo.name}</h1>
            
            <p>Manufacturer: {shipInfo.manufacturer}</p>
            <p>Cost: <NumberFormat value={shipInfo.cost_in_credits} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </p>
            <p>Max Passengers: {shipInfo.passengers} </p>
            <p>Starship Class: {shipInfo.starship_class} </p>
            <p>Speed: {shipInfo.max_atmosphering_speed} mph </p>
        </div>    
)}

export default StarshipPage