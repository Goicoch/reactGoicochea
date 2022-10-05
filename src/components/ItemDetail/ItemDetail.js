import React from "react";

export const ItemDetail =({data}) => {
    return(
        <div>
       
        <section   ClassName="py-5">
            <div   ClassName="container px-4 px-lg-5 my-5">
                <div   ClassName="row gx-4 gx-lg-5 align-items-center">
                    <div   ClassName="col-md-6">
                        <img   className="ItemDetailImg" src={data.imagen} alt="..." />
                    </div>
                    
                    <div   ClassName="col-md-6">
                        <div   ClassName="small mb-1">SKU: BST-498</div>
                        <h1   ClassName="display-1 fw-bolder">{data.name}</h1>
                        <div   ClassName="fs-5 mb-5">
                           
                            <span>${data.price}</span>
                        </div>
                        <p   ClassName="lead">descripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripcion</p>
                        <div  ClassName="d-flex">
                           
                        <button type="button"  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          Agregar al Carrito
        </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
 
export default ItemDetail;