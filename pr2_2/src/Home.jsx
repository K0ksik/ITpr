import ProductCard from "./ProductCard";
function Home(){
        return(
        
         <div className="products">
            <ProductCard
            id={1}
            name="Кошка"
            price="1234"
            photo="https://upload.wikimedia.org/wikipedia/ru/thumb/b/b9/%D0%9A%D0%BE%D1%88%D0%BA%D0%B0_%D0%92%D0%B8%D1%80%D0%B3%D0%BE.jpg/330px-%D0%9A%D0%BE%D1%88%D0%BA%D0%B0_%D0%92%D0%B8%D1%80%D0%B3%D0%BE.jpg"/>

            <ProductCard
            id={2}
            name="Лиса"
            price="5678"
            photo="https://sotni.ru/wp-content/uploads/2023/08/lisichechka-4.webp"/>

            <ProductCard
            id={3}
            name="Странная жаба"
            price="10000"
            photo="https://cdn.fishki.net/upload/post/2016/10/31/2122731/tn/8cfe8a5c377d5a83728dc812b15de005.jpg"/>
            
            <ProductCard
            id={4}
            name="Рыбка"
            price="1400"
            photo="https://blog.tetra.net/ru/ru/wp-content/uploads/2021/02/zolotaya-rybka-zvezdochet.jpg"/>

            <ProductCard
            id={5}
            name="Собака"
            price="5560"
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehIhifjQzLSnqbEcBqlItIf49cnUvHr49Yg&s"/>
        </div>
    );
    
}
export default Home;