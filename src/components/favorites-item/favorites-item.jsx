import React from 'react';
import {Link} from 'react-router-dom';
import {nanoid} from 'nanoid';
import {offerPropTypes} from '../../prop-types/offer';
import Offer from '../offer/offer';

const FavoritesItem = (props) => {
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
        <React.Fragment>
          {offers.map((offer) => <Offer key={nanoid()} offer={offer} CardType={CardType} />)}
        </React.Fragment>
      </div>
    </li>
  );
};

FavoritesItem.propTypes = offerPropTypes;

export default FavoritesItem;
