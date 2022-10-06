import React from "react";
import Button from 'react-bootstrap/Button';

export const ItemDetail =({data}) => {

    
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
                           
                        <Button type="button"  variant="dark">
          Agregar al Carrito
        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
   
        
          </div>
     
    
    
    )
}
 
export default ItemDetail;