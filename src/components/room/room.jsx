import React from 'react';
import {useSelector} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../prop-types/offer';
import {reviewPropTypes} from '../../prop-types/review';
import {CardType, AuthorizationStatus} from '../../const';
import Header from '../header/header';
import ReviewList from '../review-list/review-list';
import ReviewForm from '../review-form/review-form';
import Offer from '../offer/offer';
import Map from '../map/map';
import BookmarkButton from '../bookmark-button/bookmark-button';

const Room = (props) => {
  const IMAGE_MAX_COUNT = 6;
  const {reviews, nearbyOffers, offer} = props;

  const {hotelId, hotelName, rating, offerType, bedrooms, maxAdults, price, goods, host, description, isPremium, hotelImages, city} = offer;

  const allPoints = nearbyOffers.slice();
  allPoints.push(offer);

  const ratingStarWidth = `${Math.round(rating) * 20}%`;
  const maxHotelImages = hotelImages.length > IMAGE_MAX_COUNT ? hotelImages.slice(0, IMAGE_MAX_COUNT) : hotelImages;

  const {authStatus} = useSelector((state) => state.USER);
  const {error} = useSelector((state) => state.APP);

  const location = city.location;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {maxHotelImages.map((image, i) => {
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
                <BookmarkButton markupBlock={`property__`} hotelId={hotelId} width={`31`} height={`33`} />
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
                  <div className={classNames(`property__avatar-wrapper user__avatar-wrapper`, {'property__avatar-wrapper--pro': host.isUserPro})}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.userName}
                  </span>
                  {host.isUserPro && <span className="property__user-status">Pro</span>}
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
                {authStatus === AuthorizationStatus.AUTH
                  ? <ReviewForm id={hotelId} />
                  : ``
                }
              </section>
            </div>
          </div>
          <Map location={location} points={allPoints} currentOffer={offer} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              {error
                ? `Oops..It seems that nearby places didn't load. Sorry!`
                : `Other places in the neighbourhood`}
            </h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((nearbyOffer) => <Offer key={nearbyOffer.hotelId} offer={nearbyOffer} CardType = {CardType.MAIN} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  offer: offerPropTypes,
  reviews: PropTypes.arrayOf(reviewPropTypes),
  nearbyOffers: PropTypes.arrayOf(offerPropTypes),
};

export default Room;
