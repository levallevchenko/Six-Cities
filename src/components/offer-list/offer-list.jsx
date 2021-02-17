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
    <React.Fragment>
      <h3>CurrentOffer: {currentOfferId} </h3>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <Offer handleOfferFocus = {handleOfferFocus}
          key={offer.hotelId} offer={offer} CardType={CardType} />)}
      </div>
    </React.Fragment>
  );
};

OfferList.propTypes = offerPropTypes;

export default OfferList;
