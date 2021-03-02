import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {offerPropTypes} from '../../prop-types/offer';
import {CardTypes} from '../../const';
import {getCityOffers, sortOffers} from '../../utils/project';
import {fetchOffersList} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
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
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/login">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
                  CardType = {CardTypes.MAIN}
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

Main.propTypes = offerPropTypes.offer;

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
