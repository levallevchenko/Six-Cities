import React from 'react';
import {Link} from 'react-router-dom';
import PropType from 'prop-types';
import {offerPropTypes} from '../../prop-types/offer';

const Offer = (props) => {
  const {offer, CardType, onOfferFocus, onOfferBlur} = props;
  const {previewSrc, price, hotelName, hotelId, isPremium, isFavorite, offerType, rating} = offer;
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
      className={CardType === `FAVORITE` ? `favorites__card place-card` : `cities__place-card place-card`}>
      {isPremium && getPremiumElement()}
      <div className={CardType === `FAVORITE` ? `favorites__image-wrapper place-card__image-wrapper` : `cities__image-wrapper place-card__image-wrapper`}>
        <Link to={roomLink}>
          <img className="place-card__image" src={previewSrc} width={CardType === `FAVORITE` ? 150 : 260} height={CardType === `FAVORITE` ? 110 : 200} alt="Place image" />
        </Link>
      </div>
      <div className={CardType === `FAVORITE` ? `favorites__card-info place-card__info` : `place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={isFavorite
            ? `place-card__bookmark-button place-card__bookmark-button--active button`
            : `place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
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
