import {createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [counter, setCounter] = useState(0);
    const [cartButton, setCartButton] = useState(false)
    const [items, setItems] = useState([]);

    const addToCart = (product) => {
        setCounter(counter + 1);
        setCartButton(true);
        setItems([...items, product]);
        
    }

    const removeFromCart = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
        setCounter(counter - 1);
    }
    
    const countPrice = () => {
        return items.reduce((total, item) => total + item.price, 0);
    };
    
    
    return(
        <CartContext.Provider value = {{counter, addToCart, removeFromCart, 
            countPrice, cartButton, items
        }}>
            {children}
        </CartContext.Provider>  
    )

};
