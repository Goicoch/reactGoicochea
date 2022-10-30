import React,{useContext} from "react";
import { CartProvider } from "../../Context/CartProvider"
import { Link } from "react-router-dom";



const Item =({info}) => { 
const nombre = useContext (CartProvider);


    return(

        

        
            
            <Link to={`/item/${info.id}`}  >            
  <img className="card-img-top" src={info.image} alt="..." />
  
  <div className="card-body p-0">
      <div className="text-center">
     
          <h5 className="fw-bolder">{info.name}</h5>
          
         <h3> ${info.price}</h3>
          
      </div> 
      </div>
  
  </Link> 
 
  
     



    );
} 
export default Item;