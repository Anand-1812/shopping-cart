import { useState, useEffect } from "react";
import './Products.css';

function FetchProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  if (product.length === 0) {
    return <p>Loading product...</p>;
  }

  console.log(`Number of products: ${product.length}`)

  return (
    <div className="products">
      {product.map((item) => (
        <div className="product-info">
          <img key={item.id} src={item.image} alt={item.title} />
          <p>${item.price}</p>
          <button className="cart-btn">Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default function Products() {
  return (
    <FetchProduct />
  );
}

