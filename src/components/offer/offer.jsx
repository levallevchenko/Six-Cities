import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import PropType from 'prop-types';
import {offerPropTypes} from '../../prop-types/offer';
import BookmarkButton from '../bookmark-button/bookmark-button';

const Offer = (props) => {
  const {offer, CardType, onOfferFocus = () => {}, onOfferBlur} = props;
  const {previewSrc, price, hotelName, hotelId, isPremium, offerType, rating} = offer;
  const roomLink = `/offer/${hotelId}`;
  const ratingStarWidth = `${Math.round(rating) * 20}%`;

  const handleOfferFocus = () => onOfferFocus(offer);

  const getPremiumElement = () => <div className="place-card__mark"><span>Premium</span></div>;

  return (
    <article
      onFocus={handleOfferFocus}
      onMouseEnter = {handleOfferFocus}
      onBlur={onOfferBlur}
      onMouseLeave={onOfferBlur}
      className={classNames(`place-card`, {'favorites__card': CardType === `FAVORITE`, 'cities__place-card': CardType === `MAIN`})}>
      {isPremium && getPremiumElement()}
      <div className={classNames(`place-card__image-wrapper`, {'favorites__image-wrapper': CardType === `FAVORITE`, 'cities__image-wrapper': CardType === `MAIN`})}>
        <Link to={roomLink}>
          <img className="place-card__image" src={previewSrc} width={CardType === `FAVORITE` ? 150 : 260} height={CardType === `FAVORITE` ? 110 : 200} alt="Place image" />
        </Link>
      </div>
      <div className={classNames(`place-card__info`, {'favorites__card-info': CardType === `FAVORITE`})}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkButton markupBlock={`place-card__`} hotelId={hotelId} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingStarWidth}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={roomLink}>{hotelName}</Link>
        </h2>
        <p className="place-card__type">{offerType}</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  offer: offerPropTypes,
  CardType: PropType.string.isRequired,
  onOfferFocus: PropType.func,
  onOfferBlur: PropType.func,
};

export default Offer;
