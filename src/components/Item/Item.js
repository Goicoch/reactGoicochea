import React from "react";

const Item =({info}) => { 
    return(
            <a href="" className="books">
            <img src = {info.imagen} alt=""/>
            <p>{info.name}</p>
            </a>
    );
} 
export default Item;