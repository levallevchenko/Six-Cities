import React from 'react';

import {offerPropTypes} from '../../prop-types/offer';
import Offer from '../offer/offer';

const OfferList = (props) => {
  const {cityOffers, CardType, onOfferFocus, onOfferBlur} = props;

  return (
    <React.Fragment>
      <div className="cities__places-list places__list tabs__content">
        {cityOffers.map((offer) => <Offer
          onOfferFocus={onOfferFocus}
          onOfferBlur={onOfferBlur}
          key={offer.hotelId}
          offer={offer}
          CardType={CardType} />)}
      </div>
    </React.Fragment>
  );
};

OfferList.propTypes = offerPropTypes.offer;

export default OfferList;
