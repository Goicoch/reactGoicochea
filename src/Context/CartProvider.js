import React, {useState, useContext } from "react";
import { act } from "react-dom/test-utils";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({children}) => {

    const [ cart, setCart] = useState ([]);

    const clearCart = () => setCart ([]);
    
    const isInCart =(id) => cart.find(books => books.id === id) ? true : false;

    const removeBook = (id) => setCart (cart.filter(books => books.id !== id));

    const addBook = (item, cantidad) => {
        let newCart;
        let books = cart.find (books => books.id === item.id);
        if(books){
            books.cantidad += cantidad;
            newCart = [...cart];
        }else{
            books = {...item, cantidad: cantidad };
            newCart = [...cart, books]
        }
        setCart(newCart)
    } ;

    const totalPrice = () => {
        return cart.reduce ((prev, act) => prev + act.cantidad * act.price, 0)
    };

    const totalBooks = () => cart.reduce ((acumulador, booksActual) => acumulador + booksActual.cantidad, 0) ;


    return(
        <CartContext.Provider value={{
            clearCart, isInCart, removeBook,addBook, totalPrice,totalBooks,cart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;

