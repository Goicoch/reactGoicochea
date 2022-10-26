import React from "react"
import { useCartContext } from "../../Context/CartProvider"

const Cart = () => {
const { cart, totalPrice} = useCartContext();

    return (
    <div>
        Este es tu Carrito, Pronto va a tener un lindo diseño 😁😁😁
    </div>
    )
}
export default Cart 
//react 10 7:50