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
    <>
      <div className="sample-product">
        <img src={product[1].image} alt={product[1].title} />
        <p>${product[1].price}</p>
      </div>
      <div className="sample-product">
        <img src={product[2].image} alt={product[2].title} />
        <p>${product[2].price}</p>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <div className='home'>
      <div className='about-site'>
        <p>Welcome to the shopping cart, where you can buy trendy clothes at a decent prizes</p>
      </div>
      {<GetProduct />}
    </div>
  );
}
