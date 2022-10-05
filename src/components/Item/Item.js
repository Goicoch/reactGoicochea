import { data } from "autoprefixer";
import React from "react";

const Item =({info}) => { 
    return(
        <div  className="col mb-4 "><div className="card ">
                            
        <img className="" src={info.imagen} alt="..." />
        
        <div className="card-body p-0">
            <div className="">
           
                <h5 className="fw-bolder">{info.name} </h5>
                
               <h3>${info.price}</h3> 
            </div>
        </div>
        
        <div className="card-footer p-4 pt-3 border-top-1 bg-transparent">
            <div className=""><button className="  btn btn-outline-dark">Agregar al Carrito</button></div>
           
            <div className=""><button  className="  btn btn-outline-dark ">Quitar del Carrito</button></div>
        </div>
        
      </div>       
      </div>
    );
} 
export default Item;