import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../prop-types/offer';
import {CardType} from '../../const';
import {fetchFavorites} from '../../store/api-actions';
import {getFavoriteOfferCities} from '../../store/offers/selectors';
import Header from '../header/header';
import CityFavorites from '../city-favorites/city-favorites';

const Favorites = () => {
  const {favoriteOffers} = useSelector((state) => state.OFFERS);
  const favoriteOffersCities = useSelector(getFavoriteOfferCities);
  const dispatch = useDispatch();

  const getFavoriteOffersInCity = (city) => favoriteOffers.filter((offer) => offer.city.name === city);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [favoriteOffers]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteOffersCities.map((city, id) => <CityFavorites key={city + id} offers={getFavoriteOffersInCity(city)} CardType={CardType.FAVORITE} city={city} />)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeCity: PropTypes.string,
  isOffersLoaded: PropTypes.bool,
  onLoadOffers: PropTypes.func,
};

export default Favorites;
