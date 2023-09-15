import React, { useState, useEffect } from 'react';
import './CatalogPage.css';
import sprite from '../../sprite.svg';
import { Modal } from 'components/Modal/Modal';
import { CarInfo } from 'components/CarInfo/CarInfo';

export const CatalogPage = ({
  cars,
  setCars,
  loading,
  setLoading,
  favoriteCars,
  updateFavoriteCars,
}) => {
  const [displayedCarsCount, setDisplayedCarsCount] = useState(8);
  const [selectedCar, setSelectedCar] = useState(null);

  const toggleModal = () => setSelectedCar(prevSelectedCar => !prevSelectedCar);

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
  }, [setCars, setLoading]);

  const loadMoreCars = () => {
    setDisplayedCarsCount(prevCount => prevCount + 8);
  };

  const handleCarClick = car => {
    setSelectedCar(car);
    toggleModal();
  };

  const handleFavoriteClick = (event, car) => {
    event.stopPropagation();
    const carIndex = cars.findIndex(item => item.id === car.id);
    const updatedCars = [...cars];
    updatedCars[carIndex].isFavorited = !updatedCars[carIndex].isFavorited;
    setCars(updatedCars);

    updateFavoriteCars(car.id, updatedCars[carIndex].isFavorited);
  };

  return (
    <>
      <div className="cars-container _container">
        <ul className="cars-list">
          {cars
            .slice(0, displayedCarsCount)
            .map(
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
              }) => (
                <li key={id} className="cars-item">
                  <img
                    src={img}
                    className="car-image"
                    alt={`${make} ${model}`}
                  />
                  <svg
                    className="svg-fav"
                    onClick={event =>
                      handleFavoriteClick(event, { id, isFavorited })
                    }
                  >
                    <use
                      href={`${sprite}#${
                        isFavorited ? 'icon-fav-active' : 'icon-fav'
                      }`}
                    />
                  </svg>
                  <div className="cars-price">
                    <p>
                      {make} {model}, {year}
                    </p>
                    <p>{rentalPrice}</p>
                  </div>
                  <ul className="car-tags">
                    <li className="car-tags__item">
                      {address?.split(', ')[1] ?? ''}
                    </li>
                    <li className="car-tags__item">
                      {address?.split(', ')[2] ?? ''}
                    </li>
                    <li className="car-tags__item">{rentalCompany}</li>
                    <li className="car-tags__item">{type}</li>
                    <li className="car-tags__item">{make}</li>
                    <li className="car-tags__item">{id}</li>
                    <li className="car-tags__item">{accessories[2]}</li>
                  </ul>
                  <button
                    onClick={() =>
                      handleCarClick({
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
                    className="learn-button"
                  >
                    Learn More
                  </button>
                </li>
              )
            )}
        </ul>
        {displayedCarsCount < cars.length && (
          <div>
            <button className="bnt-loadmore" onClick={loadMoreCars}>
              Load more
            </button>
          </div>
        )}
      </div>
      {selectedCar && (
        <Modal onClose={toggleModal} showModal={selectedCar}>
          <CarInfo car={selectedCar} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
