import React from "react";
import { useCartContext } from "../../Context/CartProvider";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";
import { NavLink } from 'react-router-dom';


const Cart = () => {
const { cart, totalPrice} = useCartContext();


if (cart.length === 0) {
    return (
        <>
        <p>NO HAY ELEMENTOS EN EL CARRITO</p>
        <Link to="/">Regresar  a la tienda !!!  </Link>
        </>
    );
}

    return (
    <>
    
        {
       cart.map(books => <ItemCart key = {books.id} books={books}/>)
        }
        <h3>Total: ${totalPrice()}</h3>

         <NavLink to="/contactForm" className="registro">Registrate para continuar en este enlace</NavLink>
        
       
    </>
    )
}

export default Cart 
