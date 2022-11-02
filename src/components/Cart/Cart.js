import React from "react"
import { useCartContext } from "../../Context/CartProvider"
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart"
import ContactForm from '../ContactForm/ContactForm';
import "./Cart.css";



const Cart = () => {
const { cart, totalPrice} = useCartContext();


if (cart.length === 0) {
    return (
        <>
        <p>NO HAY ELEMENTOS EN EL CARRITO</p>
        <Link to="/">Regresar a la tienda !!!  </Link>
        </>
    );
}

    return (
    <>
    
        {
       cart.map(books => <ItemCart key = {books.id} books={books}/>)
        }
        <h3>Total: ${totalPrice()}</h3>

        <h4 className="registro">Registrate para continuar</h4>
        
       <div>
        <ContactForm/> 
        </div>
    </>
    )
}

export default Cart 
