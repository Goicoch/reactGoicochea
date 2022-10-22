import React, { Children } from "react";
export const CartContext = React.createContext([]);



export const CartProvider = ({children}) => {





    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;

/*react 9 10.30*/