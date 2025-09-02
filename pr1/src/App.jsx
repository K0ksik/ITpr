import './App.css'
import ProductCard from './ProductCard'

function App() {
    return (
        <div className="products">
            <ProductCard
            name="Кошка"
            price="бесценно"
            photo="https://upload.wikimedia.org/wikipedia/ru/thumb/b/b9/%D0%9A%D0%BE%D1%88%D0%BA%D0%B0_%D0%92%D0%B8%D1%80%D0%B3%D0%BE.jpg/330px-%D0%9A%D0%BE%D1%88%D0%BA%D0%B0_%D0%92%D0%B8%D1%80%D0%B3%D0%BE.jpg"/>

            <ProductCard
            name="Лиса"
            price="неизвестно..."
            photo="https://sotni.ru/wp-content/uploads/2023/08/lisichechka-4.webp"/>
            <ProductCard
            name="Странная жаба"
            price="10000"
            photo="https://cdn.fishki.net/upload/post/2016/10/31/2122731/tn/8cfe8a5c377d5a83728dc812b15de005.jpg"/>
            
        </div>
    );
}

export default App;