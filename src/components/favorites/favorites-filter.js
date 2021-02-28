import {getUniqueArray} from '../../utils/common';
import {offers} from '../../mocks/offers';

const favoriteOffers = offers.filter((offer) => offer.isFavorite);

const getFavoriteOfferCities = () => {
  const favoriteOfferCities = favoriteOffers.map((offer) => offer.city.name);
  const uniqueOfferCities = getUniqueArray(favoriteOfferCities);
  return uniqueOfferCities;
};

export const favoriteOfferCities = getFavoriteOfferCities();

export const getOffersInCity = (city) => favoriteOffers.filter((offer) => offer.city.name === city);
