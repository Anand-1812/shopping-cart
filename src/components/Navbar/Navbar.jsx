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
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
      </ul>

      <div className="cart-theme">
        <FaCartShopping />
        <p onClick={toggleTheme}>{toggleIcon}</p>
      </div>
    </div>
  )
}

export default Navbar
