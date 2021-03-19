import {getUniqueArray} from '../../utils/common';

const getFavoriteOffers = (offers) => offers.filter((offer) => offer.isFavorite);

export const getFavoriteOfferCities = (offers) => {
  const favoriteOfferCities = getFavoriteOffers(offers).map((offer) => offer.city.name);
  const uniqueOfferCities = getUniqueArray(favoriteOfferCities);
  return uniqueOfferCities;
};

export const getOffersInCity = (city, offers) => getFavoriteOffers(offers).filter((offer) => offer.city.name === city);
