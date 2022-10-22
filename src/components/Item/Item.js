import React,{useContext} from "react";
import { CartProvider } from "../../Context/CartProvider"
import { Link } from "react-router-dom";



const Item =({info}) => { 
const name = useContext (CartProvider);
console.log("Item: ", name);

    return(

        
<div className="d-flex justify-content-evenly gx-4 gx-lg-5  row-cols-md-3  ">
        
            <div className="card">
            <Link to={`/item/${info.id}`}  >            
  <img className="card-img-top" src={info.imagen} alt="..." />
  
  <div className="card-body p-0">
      <div className="text-center">
     
          <h5 className="fw-bolder">{info.name}</h5>
          
         <h3> ${info.price}</h3>
          
      </div> </div>
  
  </Link> 
  <div className="card-footer p-4 pt-3 border-top-1 bg-slate-500">
      <div className="text-center">
      <button className="  btn btn-outline-dark">Agregar al Carrito</button>
                 </div>
     
      <div className="text-center">
      <button  className="btn btn-outline-dark">Quitar del Carrito</button>
      </div>
  </div>
  
</div>       
</div>


    );
} 
export default Item;