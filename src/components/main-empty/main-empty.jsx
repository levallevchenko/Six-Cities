import React from 'react';
import {useSelector} from 'react-redux';

const MainEmpty = () => {
  const {isOffersLoadingFailed} = useSelector((state) => state.OFFERS);

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">
            {isOffersLoadingFailed
              ? `Failed to load offers. Please, try reloading the page`
              : `No places to stay available`}
          </b>
          {!isOffersLoadingFailed && <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>}
        </div>
      </section>
      <div className="cities__right-section" />
    </div>
  );
};

export default MainEmpty;
