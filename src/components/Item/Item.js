import React,{useContext} from "react";
import { CartProvider } from "../../Context/CartProvider"
import { Link } from "react-router-dom";

const Item =({info}) => { 
const name = useContext (CartProvider);
console.log("Item: ", name);

    return(
        <div  className="col mb-4 ">
        <div className="card">
           <Link to={`/item/${info.id}`}  >          
        <img style={{ width:200, }} src={info.imagen} alt="..." />
       
        <div className="card-body p-0">
            <div >
           
                <h5 className="fw-bolder">{info.name} </h5>
                
               <h3>${info.price}</h3> 
            </div>
        </div>
        </Link> 
        <div className="card-footer p-4 pt-3 border-top-1 bg-transparent">
            <div className=""><button className="  btn btn-outline-dark">Agregar al Carrito</button></div>
           
            <div className=""><button  className="  btn btn-outline-dark ">Quitar del Carrito</button></div>
         </div>
         </div>
      </div>
    );
} 
export default Item;