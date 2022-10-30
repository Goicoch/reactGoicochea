import React from "react";
import "./ItemCart.css";
import {useCartContext} from "..//../Context/CartProvider"

const ItemCart = ({books}) =>{

const {removeBook} = useCartContext();

    return(
<div className="itemCart">
<img src={books.image} alt={books.name} />
<div>
    <p>Titulo: {books.name}</p>
    <p>Cantidad: {books.cantidad}</p>
    <p>Precio:$ {books.price} </p>
    <p>Sub total:${books.cantidad * books.price}</p>
    <button onClick={() => removeBook (books.id)} className="btn btn-outline-dark">Eliminar </button>
</div>

</div>

    )

}

export default ItemCart