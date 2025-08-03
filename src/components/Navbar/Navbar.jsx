import { FaCartShopping } from "react-icons/fa6";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <div className="title">
        <h1>Shopping Cart</h1>
      </div>

      <ul className="links">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
      </ul>

      <div className="cart-theme">
        <FaCartShopping />
        <GoSun />
        <FaMoon />
      </div>
    </div>
  )
}

export default Navbar
