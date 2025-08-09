// Products.jsx
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import './Products.css';

function FetchProduct() {
  const [product, setProduct] = useState([]);
  const { noOfItems, setNoOfItems } = useOutletContext();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  if (product.length === 0) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="products">
      {product.map(item => (
        <div key={item.id} className="product-info">
          <img src={item.image} alt={item.title} />
          <p className="item-price">${item.price}</p>
          <button
            className="cart-btn"
            onClick={() => setNoOfItems(prev => prev + 1)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default function Products() {
  return <FetchProduct />;
}

