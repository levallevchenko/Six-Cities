import React from 'react';
import {useState} from 'react';

import {offerPropTypes} from '../../prop-types/offer';
import Offer from '../offer/offer';

const OfferList = (props) => {
  const {offers, CardType} = props;
  const [currentOfferId, setCurrentOfferId] = useState(``);

  const handleOfferFocus = (offerId) => {
    setCurrentOfferId(offerId);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      <h3>CurrentOffer: {currentOfferId + 1} </h3>
      {offers.map((offer) => <Offer handleOfferFocus = {handleOfferFocus}
        key={offer.hotelId} offer={offer} CardType={CardType} />)}
    </div>
  );
};

OfferList.propTypes = offerPropTypes;

export default OfferList;
