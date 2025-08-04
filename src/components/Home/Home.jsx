import { useEffect, useState } from 'react';
import './Home.css';

function GetProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  if (product.length <= 1) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="sample-product">
      <img src={product[1].image} alt={product[1].title} />
      <h3>{product[1].title}</h3>
      <p>${product[1].price}</p>
    </div>
  );
}
export default function Home() {
  return (
    <div className='product'>
      {<GetProduct />}
    </div>
  );
}
