import {createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [counter, setCounter] = useState(0);

    const addToCart = () => {
        setCounter(counter + 1);
    }

    return(
        <CartContext.Provider value = {{counter, addToCart}}>
            {children}
        </CartContext.Provider>  
    )

};
