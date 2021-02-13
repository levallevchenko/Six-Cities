import React from 'react';
import {nanoid} from 'nanoid';
import {offerPropTypes} from '../../prop-types/offer';
import Offer from '../offer/offer';

const OfferList = (props) => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      <React.Fragment>
        {offers.map((offer) => <Offer key={nanoid()} offer={offer} />)}
      </React.Fragment>
    </div>
  );
};

OfferList.propTypes = offerPropTypes;

export default OfferList;
