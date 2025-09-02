import { useState } from 'react';
import "./CountProduct.css"

function CountProduct() {
    const [counter, setCounter] = useState(0);

    function handleClick() {
        setCounter(counter + 1);
    }

    return (
        <div className='container'>
            <button onClick={handleClick}>Добавить в корзину</button>
            <p>Кол-во: {counter}</p>
        </div>
    );
}

export default CountProduct;