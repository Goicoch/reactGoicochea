import React from "react";
import "./ItemCart.css";

const ItemCart = ({books}) =>{

const {removeBook} = useCartContext();

    return(
<div className="itemCart">
<img src={books.imagen} alt={books.name} />
<div>
    <p>Titulo: {books.title}</p>
    <p>Cantidad: {books.cantidad}</p>
    <p>Precio: {books.price} </p>
    <p>Sub total:${books.cantidad * books.price}</p>
    <button onClick={() => removeBook (books.id)}>Eliminar </button>
</div>

</div>

    )

}

export default ItemCart