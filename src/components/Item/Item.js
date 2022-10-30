import React,{useContext} from "react";
import { CartProvider } from "../../Context/CartProvider"
import { Link } from "react-router-dom";



const Item =({info}) => { 
const nombre = useContext (CartProvider);


    return(

        

        
        
            <Link to={`/item/${info.id}`}  >  
            
            
            <div>        
  <img className="h-48 w-full object-cover md:h-full md:w-48" src={info.image} alt="..." />
  </div> 
  <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
     
          <h5 className="">{info.name}</h5>
          
         <h3> ${info.price}</h3>

          </div>
          </div>
      
      
  </Link> 
 
  
     



    );
} 
export default Item;