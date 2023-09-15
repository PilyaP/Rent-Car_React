import sprite from '../sprite.svg';
import './CarInfo.css';

export const CarInfo = ({ car, toggleModal }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car || {};

  if (!car) {
    return null;
  }

  const carsConditions = rentalConditions ? rentalConditions.split('\n') : [];
  const ageCarsConditions = carsConditions[0]
    ? carsConditions[0].split(': ')
    : [];

  const getFormattedNumber = number => {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '';
  };

  const MileageFormat = getFormattedNumber(mileage);

  return (
    <div className="modal-container">
      <button className="button-close" type="button" onClick={toggleModal}>
        <svg className="svg-close">
          <use href={`${sprite}#icon-x-close`} />
        </svg>
      </button>
      <div className="img-container">
        <img className="img-modal" src={img} alt={`${make} ${model}`} />
      </div>
      <div className="price-flex">
        <p>
          {make}
          <span style={{ color: '#0b44cd' }}> {model}</span>, {year}
        </p>
      </div>
      <ul className="info-tag__list">
        <li className="info-tag__item">{address?.split(', ')[1] ?? ''}</li>
        <li className="info-tag__item">{address?.split(', ')[2] ?? ''}</li>
        <li className="info-tag__item">Id: {id}</li>
        <li className="info-tag__item">Year: {year}</li>
        <li className="info-tag__item">Type: {type}</li>
        <li className="info-tag__item">Fuel Consumption: {fuelConsumption}</li>
        <li className="info-tag__item">Engine Size: {engineSize}</li>
      </ul>

      <p className="description">{description}</p>

      <p className="acc-func">Accessories and functionalities:</p>
      <ul className="func-list">
        {accessories.map((item, index) => (
          <li className="func-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <ul className="acc__list">
        {functionalities.map((item, index) => (
          <li className="acc__item" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <p className="rental-conditions">Rental Conditions:</p>
      <ul className="rental-conditions__list">
        <li className="rental-conditions__item">
          {ageCarsConditions[0]}:{' '}
          <span style={{ color: '#0b44cd', fontWeight: 600 }}>
            {ageCarsConditions[1]}
          </span>
        </li>

        {carsConditions.slice(1).map((item, index) => (
          <li className="rental-conditions__item" key={index}>
            {item}
          </li>
        ))}
        <li className="rental-conditions__item">
          Mileage:{' '}
          <span style={{ color: '#0b44cd', fontWeight: 600 }}>
            {MileageFormat}
          </span>
        </li>
        <li className="rental-conditions__item">
          Price:{' '}
          <span style={{ color: '#0b44cd', fontWeight: 600 }}>
            {rentalPrice}
          </span>
        </li>
      </ul>
      <a className="rental-tel" href="tel:+380730000000">
        Rental car
      </a>
    </div>
  );
};
