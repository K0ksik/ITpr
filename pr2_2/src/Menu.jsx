import { NavLink} from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';


function Menu(){
    const { theme, toggleTheme } = useContext(ThemeContext);

    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? "red" : theme === "dark" ? "#fff" : "#000",
        fontWeight: isActive ? "bold" : "normal",
        marginRight: "10px",
        textDecoration: "none"
    });


    return (
        <nav style={{marginBottom: "20px", padding: "10px", backgroundColor: theme === "dark" ? "#333" : "#fff"}}>
            
            <NavLink to = "/" end style = {navLinkStyle}>Главная</NavLink>
            <NavLink to = "/cart" end style = {navLinkStyle}>Корзина</NavLink>
            <NavLink to = "/login" end style = {navLinkStyle}>Вход </NavLink>
            <button onClick={toggleTheme} style = {{ marginLeft: "20px", borderRadius: "30px"}}>
                Переключить тему ({theme})
            </button>
        </nav>

    );

}

export default Menu;