import { useEffect, useState } from 'react';
import './Home.css';

function GetProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(product => {
        console.log(product);
        setProduct(product);
      })
  }, []);

  return (
    <div className='sample-product'>
      <img src={product[1].image} alt={product[1].title} />
    </div>
  )
}

export default function Home() {
  return (
    <section className="home-container">
      <header className="home-header">
        <h2 className="home-title">Welcome</h2>
        <p className="home-subtitle">to the shopping cart</p>
      </header>
      {<GetProduct />}
      <p className="home-description">
        A big React project to learn about React, routing, and component styling.
      </p>
      <p className="home-footer">
        This is the final project of React from <span className="highlight">The Odin Project</span>.
      </p>
    </section>
  );
}
