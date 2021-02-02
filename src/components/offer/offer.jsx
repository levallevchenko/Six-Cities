import React from 'react';
import PropTypes from 'prop-types';
import {getRandomInteger} from '../../utils';

const Offer = (props) => {
  const {name, imgId} = props;

  const imgSrc = `img/apartment-0${imgId}.jpg`;
  const price = getRandomInteger(50, 1000);

  const getPremiumElement = () => <div className="place-card__mark"><span>Premium</span></div>;
  const isTrue = Boolean(getRandomInteger(0, 1));

  return (
    <article className="cities__place-card place-card">
      {isTrue && getPremiumElement()}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={imgSrc} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  name: PropTypes.string.isRequired,
  imgId: PropTypes.number.isRequired,
};

export default Offer;
