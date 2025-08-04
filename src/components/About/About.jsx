import './About.css';

export default function About() {
  return (
    <section className="about-container">
      <header className="about-header">
        <h2 className="about-title">Welcome</h2>
        <p className="about-subtitle">to the shopping cart</p>
      </header>
      <p className="about-description">
        A big React project to learn about React, routing, and component styling.
      </p>
      <p className="about-footer">
        This is the final project of React from <span className="highlight">The Odin Project</span>.
      </p>
    </section>
  )
}
