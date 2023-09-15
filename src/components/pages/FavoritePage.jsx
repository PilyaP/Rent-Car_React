import React from 'react';
import sprite from '../sprite.svg';
import { Modal } from 'components/Modal/Modal';
import { CarInfo } from 'components/CarInfo/CarInfo';
import './FavoritePage.css';
export const FavoritePage = ({
  cars,
  favoriteCars,
  selectedCar,
  setSelectedCar,
  showModal,
  toggleModal,
}) => {
  console.log('Initial showModal value:', showModal);
  const handleCarClickNew = carDetails => {
    console.log('Car clicked:', carDetails);
    console.log('Setting selected car...');
    setSelectedCar(carDetails);
    console.log('Toggling modal...');
    toggleModal(true);
    console.log('Current state of showModal:', showModal);
  };

  const favoritesCars = cars.filter(car => favoriteCars.includes(car.id));
  console.log(favoriteCars.length);

  return (
    <>
      <div className="favorite-container _container">
        <ul className="favorite-list">
          {favoritesCars.map(
            ({
              id,
              img,
              make,
              model,
              year,
              rentalPrice,
              address,
              type,
              accessories,
              rentalCompany,
              mileage,
              fuelConsumption,
              engineSize,
              description,
              rentalConditions,
              functionalities,
              isFavorited,
              handleFavoriteClick,
            }) => (
              <li className="favorite-item" key={id}>
                <img
                  className="favorite-image"
                  src={img}
                  alt={`${make} ${model}`}
                />
                <svg className="favorite-svg">
                  <use href={`${sprite}#icon-trash`} />
                </svg>
                <div className="favorite-price">
                  <p>
                    {make} {model}, {year}
                  </p>
                  <p>{rentalPrice}</p>
                </div>
                <ul className="favorite-tag__list">
                  <li className="favorite-tag__item">
                    {address?.split(', ')[1] ?? ''}
                  </li>
                  <li className="favorite-tag__item">
                    {address?.split(', ')[2] ?? ''}
                  </li>
                  <li className="favorite-tag__item">{rentalCompany}</li>
                  <li className="favorite-tag__item">{type}</li>
                  <li className="favorite-tag__item">{make}</li>
                  <li className="favorite-tag__item">{id}</li>
                  <li className="favorite-tag__item">{accessories[2]}</li>
                </ul>
                <button
                  onClick={() =>
                    handleCarClickNew({
                      id,
                      img,
                      make,
                      model,
                      year,
                      rentalPrice,
                      address,
                      type,
                      accessories,
                      rentalCompany,
                      mileage,
                      fuelConsumption,
                      engineSize,
                      description,
                      rentalConditions,
                      functionalities,
                    })
                  }
                  className="favorite-button"
                >
                  Learn More
                </button>
              </li>
            )
          )}
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
