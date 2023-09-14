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
          {make} {model}, {year}
        </p>
      </div>
      <ul>
        <li>{address?.split(', ')[1] ?? ''}</li>
        <li>{address?.split(', ')[2] ?? ''}</li>
        <li>Id: {id}</li>
        <li>Year: {year}</li>
        <li>Type: {type}</li>
        <li>Fuel Consumption: {fuelConsumption}</li>
        <li>Engine Size: {engineSize}</li>
      </ul>

      <p>{description}</p>

      <p>Accessories and functionalities:</p>
      <ul>
        {accessories.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {functionalities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Rental Conditions:</p>
      <ul>
        <li>
          {ageCarsConditions[0]}: <span>{ageCarsConditions[1]}</span>
        </li>

        {carsConditions.slice(1).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <li>
          Mileage: <span>{MileageFormat}</span>
        </li>
        <li>
          Price: <span>{rentalPrice}</span>
        </li>
      </ul>
      <a href="tel:+380730000000">Rental car</a>
    </div>
  );
};
