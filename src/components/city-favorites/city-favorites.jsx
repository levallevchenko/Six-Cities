import React from 'react';
import {Link} from 'react-router-dom';
import {offerPropTypes} from '../../prop-types/offer';
import Offer from '../offer/offer';

const CityFavorites = (props) => {
  const {offers, CardType, city} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <Offer key={offer.hotelId} offer={offer} CardType={CardType} />)}
      </div>
    </li>
  );
};

CityFavorites.propTypes = offerPropTypes;

export default CityFavorites;
