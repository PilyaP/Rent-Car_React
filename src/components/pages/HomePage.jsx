import React from 'react';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="homepage-container _container">
      <h1 className="homepage-hero">Welcome to our Car Rental Service</h1>
      <p className="homepage-text">
        Your reliable partner in car rental in Ukraine
      </p>
      <section className="homepage__description">
        <p className="homepage-text">
          Our service offers a wide range of cars to suit any taste and budget.
          Our Ukrainian clients appreciate our dedication to providing quality
          vehicles at competitive prices, with the convenience of easy online
          booking and exceptional customer service.
        </p>
      </section>

      <section className="homepage__banderomobile">
        <h2 className="homepage-title">Experience the Unique Banderomobile</h2>
        <p className="homepage-text">
          We are proud to present a one-of-a-kind experience for our clients -
          the unique Banderomobile, available exclusively at our car rental
          service in Ukraine. Immerse yourself in a unique driving experience
          with this specially designed vehicle, which showcases the spirit and
          pride of Ukrainian craftsmanship.
        </p>
        <img
          src="https://res.cloudinary.com/dhw6rxosn/image/upload/v1694901006/bandero_mobil.jpg"
          alt="Banderomobile"
          className="homepage__banderomobile-image"
        />
      </section>

      <section className="homepage__cta">
        <p className="homepage-text">
          Head to the catalog and choose the perfect car for yourself today!
        </p>
        <a href="/catalog" className="homepage__cta-button">
          View Catalog
        </a>
      </section>
    </div>
  );
};
