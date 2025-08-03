import { NavLink } from "react-router";
import { FaCartShopping, FaM } from "react-icons/fa6";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import './Navbar.css';

function Navbar({ theme, setTheme }) {
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const toggleIcon = theme === 'light' ? <FaMoon /> : <GoSun />

  return (
    <div className="navbar">
      <h1>Shopping Cart</h1>

      <ul className="links">
        <li>
          <NavLink to="/home" className={({ isActive }) => isActive ? "link active-link" : "link" }>Home</NavLink>
        </li>
      </ul>

      <div className="cart-theme">
        <FaCartShopping className="cartIcon" />
        <p onClick={toggleTheme}>{toggleIcon}</p>
      </div>
    </div>
  )
}

export default Navbar
