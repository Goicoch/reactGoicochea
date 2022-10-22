import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Contador from "../Contador/Contador";

export const ItemDetail =({data = [] }) => {

    const [goToCart, setGoToCart]= useState(false);

    const onAdd = (cantidad) =>{
        setGoToCart(true);
    }

    return(
        <div>
       
        <section   ClassName="py-5">
            <div   ClassName="container px-4 px-lg-5 my-5">
                <div   ClassName="row gx-4 gx-lg-5 align-items-center">
                    <div   ClassName="col-md-6">
                        <img  style={{ width:200, }}  className="ItemDetailImg" src={data.imagen} alt="..." />
                    </div>
                    
                    <div   ClassName="col-md-6">
                        <div   ClassName="small mb-1">SKU: BST-498</div>
                        <h1   ClassName="display-1 fw-bolder">{data.name}</h1>
                        <div   ClassName="fs-5 mb-5">
                           
                            <span>${data.price}</span>
                        </div>
                        <p   ClassName="lead">descripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripcion</p>
                        <div  ClassName="d-flex">
                           
        
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