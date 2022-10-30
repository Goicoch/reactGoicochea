import React, {useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({children}) => {

    const [ cart, setCart] = useState ([]);

    const clearCart = () => setCart ([]);
    
    const isInCart =(id) => cart.find(book => book.id === id) ? true : false;

    const removeBook = (id) => setCart (cart.filter(book => book.id !== id));

    const addBook = (item, cantidad) => {
        let newCart;
        let book = cart.find (book =>
            book.id === item.id );

        if(book){
            book.cantidad += cantidad;
            newCart = [...cart];
        }else{
            book = {...item, cantidad: cantidad };
            newCart = [...cart, book]
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

