import { CartContext } from "./CartContext";
import { useContext } from "react";

function Cart(){
    const { counter } = useContext(CartContext);
    return(
        <div>
        <h1>Корзина</h1>
        <p>В корзине: {counter}</p>
        </div>
    )
}

export default Cart;