// https://6501aa22736d26322f5c18c2.mockapi.io/cars

import axios from 'axios';

export const getCars = async () => {
  const { data } = await axios.get(
    'https://6501aa22736d26322f5c18c2.mockapi.io/cars'
  );
  return data;
};