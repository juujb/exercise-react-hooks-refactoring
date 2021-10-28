// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [redCar, setRed] = useState(false);
  const [blueCar, setBlue] = useState(false);
  const [yellowCar, setYellow] = useState(false);
  const [color, setColor ] = useState('red');

  const contextValue = {
    redCar,
    setRed,
    blueCar,
    setBlue,
    yellowCar,
    setYellow,
    color,
    setColor,
  };

  return (
    <CarsContext.Provider value={contextValue}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
