import {SortingTypes} from '../const';

export const getCityOffers = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

export const sortOffers = (offers, sortingType) => {
  switch (sortingType) {
    case SortingTypes.PRICE_LOW:
      return [...offers].sort((a, b) => (a.price - b.price));
    case SortingTypes.PRICE_HIGH:
      return [...offers].sort((a, b) => (b.price - a.price));
    case SortingTypes.RATING:
      return [...offers].sort((a, b) => (b.rating - a.rating));
    default:
      return [...offers];
  }
};
