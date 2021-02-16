import React from 'react';
import {offerPropTypes} from '../../prop-types/offer';
import Offer from '../offer/offer';

const OfferList = (props) => {
  const {offers, CardType} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Offer key={offer.hotelId} offer={offer} CardType={CardType} />)}
    </div>
  );
};

OfferList.propTypes = offerPropTypes;

export default OfferList;
