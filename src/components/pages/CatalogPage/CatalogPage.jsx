import { Loader } from 'components/Loader/Loader';
import React, { useState, useEffect } from 'react';
import './CatalogPage.css';
import { LearnMore } from 'components/LearnMore/LearnMore';
import { Modal } from 'components/Modal/Modal';
import { CarInfo } from 'components/CarInfo/CarInfo';

export const CatalogPage = ({ car }) => {
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [displayedCarsCount, setDisplayedCarsCount] = useState(8);
  const [selectedCar, setSelectedCar] = useState(null);
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
  }, []);

  if (loading) {
    return <Loader />;
  }

  const loadMoreCars = () => {
    setDisplayedCarsCount(prevCount => prevCount + 8);
  };

  const handleCarClick = car => {
    setSelectedCar(car);
    toggleModal();
  };

  return (
    <>
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
            }) => (
              <li
                key={id}
                className="cars-item"
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
              >
                <img src={img} className="car-image" alt={`${make} ${model}`} />
                <div className="cars-price">
                  <p>
                    {make} {model}, {year}
                  </p>
                  <p>{rentalPrice}</p>
                </div>
                <div className="car-tags">
                  {`${address.split(', ')[1]} | ${
                    address.split(', ')[2]
                  } | ${rentalCompany} | Premium | ${type} | ${make} | ${id} | ${
                    accessories[2]
                  }`}
                </div>
                <LearnMore />
              </li>
            )
          )}
      </ul>
      {displayedCarsCount < cars.length && (
        <button onClick={loadMoreCars}>Load more</button>
      )}
      {showModal && (
        <Modal onClose={toggleModal} showModal={showModal}>
          <CarInfo car={selectedCar} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
