import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

function Product(){
    //Достаём параметр id из URL
    const { id } = useParams();
    const { counter, addToCart } = useContext(CartContext);

    function handleClick() {
        addToCart();
    }

    return (
        <div className='container'>
            <h2>Товар с id: {id} </h2>
            <button onClick={handleClick}>Добавить в корзину</button>
            <p>В корзине: {counter}</p>
        </div>
    );
   
    
}

export default Product;