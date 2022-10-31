import React from "react"
import { useCartContext } from "../../Context/CartProvider"
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart"
import {addDoc,collection, getFirestore} from "firebase/firestore";

const Cart = () => {
const { cart, totalPrice} = useCartContext();

const order = {
    buyer:{
        name: "pedro",
        email:"pedrito@gmail.com",
        phone: "12121212",
        address:"sdjfnsn"

},
items: cart.map(book => ({id: book.id, name: book.name, price: book.price, cantidad:book.cantidad})),
total: totalPrice(),
    }

    const handleClick = () => {
    const db = getFirestore();
    const orderCollection = collection (db, "orders");
    addDoc (orderCollection, order)
        .then (({ id }) => console.log(id))
    }


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
        <p>Total ${totalPrice()}</p>
        <button onClick ={handleClick}>emitir compra!!!</button>
    </>
    )
}

export default Cart 
