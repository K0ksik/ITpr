import './App.css';
import Login from './Login';
import Home from './Home';
import Cart from './Cart';
import Menu from './Menu';
import GlobalStyle from './GlobalStyle';
import Dashboard from './Dashboard';
import { ThemeProvider } from './ThemeContext';
import { CartProvider } from './CartContext';
import {Routes, Route,BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <GlobalStyle>
            <Menu/>
              <Routes>
                <Route path = '/' element = {<Home/>}/>
                <Route path = '/login' element = {<Login/>}/>
                <Route path = '/cart' element = {<Cart/>}/>
                <Route path = '/dashboard' element = {<Dashboard/>}/>
              </Routes>
            </GlobalStyle>
          </BrowserRouter>
        </CartProvider>
    </ThemeProvider>
    
    
  );
}

export default App;
