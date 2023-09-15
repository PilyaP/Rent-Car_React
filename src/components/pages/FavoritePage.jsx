import React from 'react';

export const FavoritePage = ({ cars, favoriteCars }) => {
    const favoritesCars = cars.filter(car => favoriteCars.includes(car.id));
    console.log(favoriteCars.length);

  return (
    <div>
      <ul>
        {favoritesCars.map(({ id, img, make, model }) => (
          <li key={id}>
            <img src={img} alt={`${make} ${model}`} />
            <p>{`${make} ${model}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
