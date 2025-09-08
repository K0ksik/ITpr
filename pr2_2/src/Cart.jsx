import { CartContext } from "./CartContext";
import { useContext } from "react";

function Cart(){
    const { counter, items, removeFromCart, countPrice } = useContext(CartContext);
    return(
        <div>
            <h1>Корзина</h1>
            <p>В корзине: {counter}</p>
        
            <div className="сart-items">
                <p>Итоговая цена: {countPrice()}</p>
                {items.map (item => (
                    <div key = {item.id}>
                        <h2>{item.name}, цена: {item.price}</h2>
                        <button onClick = {() => removeFromCart(item.id)}>Удалить</button>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart;