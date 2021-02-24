import React from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {offerPropTypes} from '../../prop-types/offer';
import {CardTypes} from '../../const';
import ReviewList from '../review-list/review-list';
import ReviewForm from '../review-form/review-form';
import Offer from '../offer/offer';
import Map from '../map/map';

const Room = (props) => {
  const {offer, reviews, nearbyOffers} = props;
  const {hotelName, rating, offerType, bedrooms, maxAdults, price, goods, host, description, isFavorite, isPremium, hotelImages, city} = offer;
  const ratingStarWidth = `${Math.round(rating) * 20}%`;

  // const Good = (props) => {
  //   const {good} = props
  //   return (
  //     <li className="property__inside-item">
  //       {good}
  //     </li>
  //   );
  // }

  const location = city.location;

  const points = [];
  nearbyOffers.map((nearbyOffer) => {
    points.push(nearbyOffer.point);
  });

  const [currentOfferId, setCurrentOfferId] = useState(``);

  const handleOfferFocus = (offerId) => {
    setCurrentOfferId(offerId);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
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
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {hotelImages.map((image, i) => {
                return <div className="property__image-wrapper" key={{image} + i}>
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>;
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {hotelName}
                </h1>
                <button className={isFavorite ? `property__bookmark-button button property__bookmark-button--active` : `property__bookmark-button button`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: ratingStarWidth}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offerType}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {maxAdults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {/* {goods.map((good, i) => <Good key={good + i} good={good} />)} */}
                  {goods.map((good, i) => {
                    return <li className="property__inside-item" key={{good} + i}>
                      {good}
                    </li>;
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={host.isUserPro ? `property__avatar-wrapper user__avatar-wrapper property__avatar-wrapper--pro` : `property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.userName}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map location={location} points={points} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h3>CurrentOffer: {currentOfferId} </h3>
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((nearbyOffer, i) => <Offer key={nearbyOffer.hotelId + i} offer={nearbyOffer} CardType = {CardTypes.MAIN} onOfferFocus = {handleOfferFocus} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = offerPropTypes.offer;

export default Room;
