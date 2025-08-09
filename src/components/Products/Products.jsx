// Products.jsx
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import './Products.css';

function Products() {
  const [product, setProduct] = useState([]);
  const { noOfItems, setNoOfItems, cartItems, setCartItems } = useOutletContext();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  if (product.length === 0) {
    return <p>Loading product...</p>;
  }

  const handleAddToCartItems = (item) => {
    setCartItems(prev => [...prev, item]);
    setNoOfItems(prev => prev + 1);
  };

  return (
    <div className="products">
      {product.map(item => (
        <div key={item.id} className="product-info">
          <img src={item.image} alt={item.title} />
          <p className="item-price">${item.price}</p>
          <button
            className="cart-btn"
            onClick={() => handleAddToCartItems(item)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
