import React from 'react';
import './GreetingComponent.css';


function HolamundoId(props) {
    return (
        <h1 id="h1hello">Hola {props.hola}</h1>
    )
}

export default HolamundoId;