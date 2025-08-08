import { useState, useEffect } from "react";

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
        <img key={item.id} src={item.image} alt={item.title} />
      ))}
    </div>
  );
}

export default function Products() {
  return (
    <div className="product">
      <FetchProduct />
    </div>
  );
}

