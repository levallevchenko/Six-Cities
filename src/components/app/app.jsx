import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = (props) => {
  const {placesCount, hotelNames} = props;

  return (
    <Main placesCount={placesCount} hotelNames = {hotelNames} />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  hotelNames: PropTypes.string.isRequired,
};

export default App;
