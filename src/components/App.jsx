import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './Footer/Footer';

import { Loader } from './Loader/Loader';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { FavoritePage } from './pages/FavoritePage';
import { Header } from './Header/Header';

export const App = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
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
      const updatedFavoriteCars = isFavorited
        ? [...prevFavoriteCars, carId]
        : prevFavoriteCars.filter(id => id !== carId);

      localStorage.setItem('favoriteCars', JSON.stringify(updatedFavoriteCars));

      return updatedFavoriteCars;
    });
  };
  const onFilterChange = filters => {
    let filteredCarss = cars;

    if (
      filters.make !== '' ||
      filters.priceRange.min !== 0 ||
      filters.priceRange.max !== 1000 ||
      filters.mileageRange.min !== 0
    ) {
      filteredCarss = cars.filter(
        car =>
          (filters.make === '' || car.make === filters.make) &&
          parseInt(car.rentalPrice.substring(1)) >= filters.priceRange.min &&
          parseInt(car.rentalPrice.substring(1)) <= filters.priceRange.max &&
          car.mileage >= filters.mileageRange.min
      );
    }

    setFilteredCars(filteredCarss);
  };

  console.log(filteredCars.length);

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/catalog"
          element={
            <CatalogPage
              setFavoriteCars={setFavoriteCars}
              cars={cars}
              filteredCars={filteredCars}
              setCars={setCars}
              loading={loading}
              setLoading={setLoading}
              favoriteCars={favoriteCars}
              updateFavoriteCars={updateFavoriteCars}
              onFilterChange={onFilterChange}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritePage
              cars={cars}
              favoriteCars={favoriteCars}
              filteredCars={filteredCars}
              setFavoriteCars={setFavoriteCars}
              selectedCar={selectedCar}
              setSelectedCar={setSelectedCar}
              showModal={showModal}
              setShowModal={setShowModal}
              toggleModal={toggleModal}
              onFilterChange={onFilterChange}
            />
          }
        />
      </Routes>
      <Footer />
    </Suspense>
  );
};
