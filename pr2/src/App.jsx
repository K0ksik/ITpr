import './App.css';
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Login from './Login';
import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Menu from "./Menu";
import GlobalStyle from './GlobalStyles';
import Cart from './Cart';
import { CartProvider } from './CartContext';

function App() {
    return(
      <ThemeProvider>
        <CartProvider>
        <BrowserRouter>
        <GlobalStyle>
          <Menu/>
          <Routes>
            <Route path ='/' element = {<Home/>}/>
            <Route path ='/about' element = {<About/>}/>
            <Route path='/product/:id' element = {< Product/>}/>
            <Route path ='/login' element = {<Login/>}/>
            <Route path = '/cart' element = {<Cart/>}/>
          </Routes>
        </GlobalStyle>
        </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
      
      
    );
}

export default App;

