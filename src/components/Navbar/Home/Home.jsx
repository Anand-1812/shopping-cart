import './Home.css';

export default function Home() {
  return (
    <section className="home-container">
      <header className="home-header">
        <h2 className="home-title">Welcome</h2>
        <p className="home-subtitle">to the shopping cart</p>
      </header>
      <p className="home-description">
        A big React project to learn about React, routing, and component styling.
      </p>
      <p className="home-footer">
        This is the final project of React from <span className="highlight">The Odin Project</span>.
      </p>
    </section>
  );
}
