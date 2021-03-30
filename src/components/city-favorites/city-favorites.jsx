import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../prop-types/offer';
import Offer from '../offer/offer';

const CityFavorites = (props) => {
  const {offers, сardType, city} = props;

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
        {offers.map((offer) => <Offer key={offer.hotelId} offer={offer} сardType={сardType} />)}
      </div>
    </li>
  );
};

CityFavorites.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  сardType: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default CityFavorites;
