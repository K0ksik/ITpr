import CountProduct from './СountProduct'
import './ProductCard.css';
function ProductCard({ name, price, photo }) {
    

return(
    <div className = 'card'>
    <img src={photo} width={250} height={250}/>
    <p>Название: {name}</p>
    <p>Цена: {price}</p>
    <CountProduct/>
    </div>
    )
}
export default ProductCard;