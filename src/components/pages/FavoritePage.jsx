import React from 'react';
import sprite from '../sprite.svg';
import { Modal } from 'components/Modal/Modal';
import { CarInfo } from 'components/CarInfo/CarInfo';
import './FavoritePage.css';

export const FavoritePage = ({
  cars,
  favoriteCars,
  setFavoriteCars,
  selectedCar,
  setSelectedCar,
  showModal,
  toggleModal,
}) => {
  const handleCarClickNew = carDetails => {
    setSelectedCar(carDetails);
    toggleModal(true);
  };

  const handleDeleteClick = carId => {
    console.log('handleDeleteClick called with carId:', carId);

    setFavoriteCars(prevFavoriteCars => {
      const updatedFavoriteCars = prevFavoriteCars.filter(
        carIdInList => String(carIdInList) !== String(carId)
      );

      console.log(updatedFavoriteCars);

      localStorage.setItem('favoriteCars', JSON.stringify(updatedFavoriteCars));

      return updatedFavoriteCars;
    });
  };

  const favoritesCars = cars.filter(car => favoriteCars.includes(car.id));

  return (
    <>
      <div className="favorite-container _container">
        <ul className="favorite-list">
          {favoritesCars.map(car => (
            <li className="favorite-item" key={car.id}>
              <img
                className="favorite-image"
                src={car.img}
                alt={`${car.make} ${car.model}`}
              />
              <svg
                className="favorite-svg"
                onClick={() => handleDeleteClick(car.id)}
              >
                <use href={`${sprite}#icon-trash`} />
              </svg>
              <div className="favorite-price">
                <p>
                  {car.make} {car.model}, {car.year}
                </p>
                <p>{car.rentalPrice}</p>
              </div>
              <ul className="favorite-tag__list">
                <li className="favorite-tag__item">
                  {car.address?.split(', ')[1] ?? ''}
                </li>
                <li className="favorite-tag__item">
                  {car.address?.split(', ')[2] ?? ''}
                </li>
                <li className="favorite-tag__item">{car.rentalCompany}</li>
                <li className="favorite-tag__item">{car.type}</li>
                <li className="favorite-tag__item">{car.make}</li>
                <li className="favorite-tag__item">{car.id}</li>
                <li className="favorite-tag__item">{car.accessories[2]}</li>
              </ul>
              <button
                onClick={() => handleCarClickNew(car)}
                className="favorite-button"
              >
                Learn More
              </button>
            </li>
          ))}
        </ul>
      </div>
      {showModal && (
        <Modal onClose={toggleModal} showModal={showModal}>
          <CarInfo car={selectedCar} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
