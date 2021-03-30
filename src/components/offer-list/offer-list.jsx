import React from 'react';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../prop-types/offer';
import Offer from '../offer/offer';

const OfferList = (props) => {
  const {cityOffers, сardType, onOfferFocus, onOfferBlur} = props;

  return (
    <React.Fragment>
      <div className="cities__places-list places__list tabs__content">
        {cityOffers.map((offer) => <Offer
          onOfferFocus={onOfferFocus}
          onOfferBlur={onOfferBlur}
          key={offer.hotelId}
          offer={offer}
          сardType={сardType} />)}
      </div>
    </React.Fragment>
  );
};

OfferList.propTypes = {
  cityOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  сardType: PropTypes.string.isRequired,
  onOfferFocus: PropTypes.func.isRequired,
  onOfferBlur: PropTypes.func.isRequired,
};

export default OfferList;
