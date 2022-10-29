import React,{useContext} from "react";
import { CartProvider } from "../../Context/CartProvider"
import { Link } from "react-router-dom";



const Item =({info}) => { 
const nombre = useContext (CartProvider);


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
 
  
</div>       
</div>


    );
} 
export default Item;