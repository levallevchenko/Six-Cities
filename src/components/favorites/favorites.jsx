import React from 'react';
import {Link} from 'react-router-dom';
import {CardTypes} from '../../const';
import CityFavorites from '../city-favorites/city-favorites';
import {Header} from '../header/header';
import {favoriteOfferCities, getOffersInCity} from './favorites-filter';

const Favorites = () => {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteOfferCities.map((city, id) => <CityFavorites key={city + id} offers={getOffersInCity(city)} CardType={CardTypes.FAVORITE} city={city} />)}
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

export default Favorites;
