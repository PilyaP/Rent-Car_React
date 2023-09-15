import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { Loader } from './Loader/Loader';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { FavoritePage } from './pages/FavoritePage';

export const App = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = value => {
    setShowModal(value);
  };
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://6501aa22736d26322f5c18c2.mockapi.io/cars'
        );
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();

    const storedFavoriteCars = JSON.parse(localStorage.getItem('favoriteCars'));
    setFavoriteCars(storedFavoriteCars || []);
  }, []);

  const updateFavoriteCars = (carId, isFavorited) => {
    setFavoriteCars(prevFavoriteCars => {
      let updatedFavoriteCars;
      if (isFavorited) {
        updatedFavoriteCars = [...prevFavoriteCars, carId];
      } else {
        updatedFavoriteCars = prevFavoriteCars.filter(id => id !== carId);
      }

      localStorage.setItem('favoriteCars', JSON.stringify(updatedFavoriteCars));
      return updatedFavoriteCars;
    });
  };

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/catalog"
          element={
            <CatalogPage
              cars={cars}
              setCars={setCars}
              loading={loading}
              setLoading={setLoading}
              favoriteCars={favoriteCars}
              updateFavoriteCars={updateFavoriteCars}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritePage
              cars={cars}
              favoriteCars={favoriteCars}
              setFavoriteCars={setFavoriteCars}
              selectedCar={selectedCar}
              setSelectedCar={setSelectedCar}
              showModal={showModal}
              toggleModal={toggleModal}
            />
          }
        />
      </Routes>
      <Footer />
    </Suspense>
  );
};
