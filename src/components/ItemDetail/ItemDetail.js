import React,{useState} from "react";
import {useCartContext} from"../../Context/CartProvider";
import { Link } from "react-router-dom";
import Contador from "../Contador/Contador";

export const ItemDetail =({data = [] }) => {

    const [goToCart, setGoToCart]= useState(false);
    const{addBook} = useCartContext();

    const onAdd = (cantidad) =>{
        setGoToCart(true);
        addBook(data, cantidad);
    }

    return(
        <div>
       
        <section   className="py-5">
            <div   className="container px-4 px-lg-5 my-5">
                <div   className="row gx-4 gx-lg-5 align-items-center">
                    <div   className="col-md-6">
                        <img  style={{ width:200, }}  className="ItemDetailImg" src={data.imagen} alt="..." />
                    </div>
                    
                    <div   className="col-md-6">
                        <div   className="small mb-1">SKU: BST-498</div>
                        <h1   className="display-1 fw-bolder">{data.name}</h1>
                        <div   className="fs-5 mb-5">
                           
                            <span>${data.price}</span>
                        </div>
                        <p   className="lead">descripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripcion</p>
                        <div  className="d-flex">
                           
        
        {
            goToCart ? <Link to="/cart">Terminar compra</Link>:<Contador initial ={1} stock={10} onAdd={onAdd}/>
        }
        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
   
        
          </div>
     
    
    
    )
}
 
export default ItemDetail;