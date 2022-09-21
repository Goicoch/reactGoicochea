import { useEffect, useState } from 'react';

const Greeting= (props) => {
    

    return (
        
        <div>
            <h1> Hola {props.name} {props.lastname}</h1>
        </div>
         );
        }

export default Greeting