import React from 'react';
import Main from '../main/main';
import {offerPropTypes} from '../../prop-types/offer';

const App = (props) => {
  const {placesCount, offers} = props;

  return (
    <Main placesCount={placesCount} offers = {offers} />
  );
};

App.propTypes = offerPropTypes;

export default App;
