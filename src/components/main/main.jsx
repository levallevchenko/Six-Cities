import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../prop-types/offer';
import {CardType} from '../../const';
import {getCityOffers, sortOffers} from '../../utils/project';
import {fetchOffersList} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../header/header';
import OfferSorting from '../offer-sorting/offer-sorting';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import MainEmpty from '../main-empty/main-empty';

const Main = (props) => {
  const {activeCity, cityOffers, isOffersLoaded, onLoadOffers} = props;
  const [currentOffer, setCurrentOffer] = useState(null);

  useEffect(() => {
    if (!isOffersLoaded) {
      onLoadOffers();
    }
  }, [isOffersLoaded]);

  if (!isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const handleOfferFocus = (offer) => {
    setCurrentOffer(offer);
  };

  const handleOfferBlur = () => {
    setCurrentOffer(null);
  };

  const placesCount = cityOffers.length;

  const location = placesCount ? cityOffers[0].city.location : {};

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={classNames(`page__main page__main--index`, {'page__main--index-empty': !placesCount})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        <div className="cities">
          {placesCount === 0 ? <MainEmpty /> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placesCount} places to stay in {activeCity}</b>
                <OfferSorting />
                <OfferList
                  cityOffers={cityOffers}
                  CardType = {CardType.MAIN}
                  onOfferFocus ={handleOfferFocus}
                  onOfferBlur={handleOfferBlur} />
              </section>
              <div className="cities__right-section">
                <Map location={location} points={cityOffers} isMainMap={true} currentOffer={currentOffer} />
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  cityOffers: PropTypes.arrayOf(offerPropTypes),
  activeCity: PropTypes.string,
  isOffersLoaded: PropTypes.bool,
  onLoadOffers: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  cityOffers: sortOffers(getCityOffers(state.offers, state.activeCity), state.activeSorting),
  isOffersLoaded: state.isOffersLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffers() {
    dispatch(fetchOffersList());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
