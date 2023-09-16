import React, { useState, useEffect, useCallback, useRef } from 'react';
import './SelectFilter.css';

export const SelectFilter = ({ cars, onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 10, max: 1000 });
  const [mileageRange, setMileageRange] = useState({ min: '', max: '' });

  const [maxPrice, setMaxPrice] = useState(1000);

  const prevCars = useRef(cars);
  const prevSelectedMake = useRef(selectedMake);
  const prevPriceRange = useRef(priceRange);
  const prevMileageRange = useRef(mileageRange);

  useEffect(() => {
    if (cars && cars.length > 0) {
      const maxCarPrice = cars.reduce(
        (max, car) => Math.max(max, parseInt(car.price)),
        0
      );
      setMaxPrice(maxCarPrice || 1000);
    }
  }, [cars]);

  const handleFilterChange = useCallback(() => {
    console.log('Selected Make:', selectedMake);
    console.log('Price Range:', priceRange);
    console.log('Mileage Range:', mileageRange);

    const makeFilter = selectedMake === 'all' ? '' : selectedMake;

    onFilterChange({
      make: makeFilter,
      priceRange,
      mileageRange,
    });
  }, [selectedMake, priceRange, mileageRange, onFilterChange]);

  useEffect(() => {
    if (
      prevCars.current !== cars ||
      prevSelectedMake.current !== selectedMake ||
      prevPriceRange.current !== priceRange ||
      prevMileageRange.current !== mileageRange
    ) {
      handleFilterChange();
    }

    prevCars.current = cars;
    prevSelectedMake.current = selectedMake;
    prevPriceRange.current = priceRange;
    prevMileageRange.current = mileageRange;
  }, [cars, selectedMake, priceRange, mileageRange, handleFilterChange]);

  const handleMakeChange = e => {
    setSelectedMake(e.target.value);
  };

  const handlePriceRangeChange = e => {
    const min = parseInt(e.target.value, 10);
    setPriceRange(prev => ({ ...prev, min }));
  };

  const handleMileageRangeChange = e => {
    const min = e.target.name === 'min' ? e.target.value : mileageRange.min;
    const max = e.target.name === 'max' ? e.target.value : mileageRange.max;
    setMileageRange({ min, max });
  };

  return (
    <div className="select-container">
      <label className="select-label">
        <span className="select-label__span">Car brand</span>
        <select
          className="select-select__brand"
          onChange={handleMakeChange}
          value={selectedMake}
        >
          <option value="all">All</option>
          {cars?.map((item, index) => (
            <option key={index} value={item.make}>
              {item.make}
            </option>
          ))}
        </select>
      </label>
      <label className="select-label">
        <span className="select-label__span">Price/1 hour:</span>
        <select
          className="select-select__price"
          value={priceRange.min}
          onChange={handlePriceRangeChange}
        >
          {[...Array(Math.floor(maxPrice / 10)).keys()].map(value => (
            <option key={value} value={(value + 1) * 10}>
              To {(value + 1) * 10} $
            </option>
          ))}
        </select>
      </label>
      <label className="select-label">
        <span className="select-label__span">Car mileage / km</span>
        <div>
          <input
            className="select-input__from"
            style={{
              borderRight: '1px solid rgba(138, 138, 137, 0.2)',
            }}
            type="number"
            placeholder="From"
            value={mileageRange.min}
            onChange={handleMileageRangeChange}
            name="min"
          />
          <input
            className="select-input__to"
            type="number"
            placeholder="To"
            value={mileageRange.max}
            onChange={handleMileageRangeChange}
            name="max"
          />
        </div>
      </label>
      <button className="select-button" onClick={handleFilterChange}>
        Search
      </button>
    </div>
  );
};
