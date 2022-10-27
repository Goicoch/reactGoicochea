import React from "react"
import { useCartContext } from "../../Context/CartProvider"
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart"

const Cart = () => {
const { cart, totalPrice} = useCartContext();

if (cart.length === 0) {
    return (
        <>
        <p>NO HAY ELEMENTOS EN EL CARRITO</p>
        <Link to="/">Seguir Comprando </Link>
        </>
    );
}

    return (
    <>
        {
       cart.map(books => <ItemCart key = {books.id} books={books}/>)
        }
        <p>Total ${totalPrice()}</p>
    </>
    )
}
export default Cart 
