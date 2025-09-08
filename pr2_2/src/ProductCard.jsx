import './ProductCard.css';
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { NavLink } from 'react-router-dom';

function ProductCard({ name, price, photo, id }) {
    const {addToCart, cartButton } = useContext(CartContext);

    function handleClick() {
        addToCart({
            id: id,
            name: name,
            price: price
        });
    }

return(
    <div className = 'card'>
        <img src={photo} width={250} height={250}/>
        <p>Название: {name}</p>
        <p>Цена: {price}</p>
        <button onClick={handleClick}>Добавить в корзину</button>

        {cartButton 
        ? (
        <NavLink to="/cart">
            <button className="cart-button">Перейти в корзину</button>
        </NavLink> )
        : null
        }
    </div>
    )
}
export default ProductCard;