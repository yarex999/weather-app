import React from 'react';

function WeatherComponent(props){

    return(<div className="weather-details__item">
        <p>{props.icon}</p>
        <p>{props.name}</p>
        <p>{props.value}</p>
    </div>)
}

export default WeatherComponent