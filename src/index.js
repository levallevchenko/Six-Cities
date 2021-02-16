import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers, nearbyOffersArray} from '../src/mocks/offers';
import {reviews} from '../src/mocks/reviews';

const Setting = {
  PLACES_COUNT: 312
};

const CardType = {
  MAIN: `MAIN`,
  FAVORITE: `FAVORITE`
};

ReactDOM.render(
    <App
      placesCount={Setting.PLACES_COUNT} offers = {offers} reviews = {reviews} nearbyOffersArray = {nearbyOffersArray} CardType = {CardType}
    />,
    document.querySelector(`#root`)
);
