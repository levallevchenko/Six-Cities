import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACES_COUNT: 312
};

const hotelNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `The Joshua Tree`,
  `The Pondhouse - A Magical`
];

ReactDOM.render(
    <App
      placesCount={Setting.PLACES_COUNT} hotelNames = {hotelNames}
    />,
    document.querySelector(`#root`)
);
