import React from 'react';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage__header">
        <h1>Welcome to our Car Rental Service</h1>
        <p>Your reliable partner in car rental in Ukraine</p>
      </header>
      <section className="homepage__description">
        <p>
          Our service offers a wide range of cars to suit any taste and budget.
          Whether you are looking for an economical hatchback for the weekend or
          a premium sedan for a special occasion, we can meet your needs.
        </p>
      </section>
      <section className="homepage__features">
        <h2>Why Choose Us</h2>
        <ul>
          <li>Wide selection of cars</li>
          <li>Affordable prices</li>
          <li>Easy booking through online catalog</li>
          <li>Friendly customer support</li>
        </ul>
      </section>
      <section className="homepage__cta">
        <p>
          Head to the catalog and choose the perfect car for yourself today!
        </p>
        <a href="/catalog" className="homepage__cta-button">
          View Catalog
        </a>
      </section>
    </div>
  );
};
