import './CartItems.css';
import { useOutletContext } from "react-router";

function CartItems() {
  const { cartItems } = useOutletContext();

  if (cartItems.length == 0) {
    return <p>Add items to the cart</p>
  }

  return (
    <div className="cart">
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
