import {SortingType} from '../const';

export const getCityOffers = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

export const sortOffers = (offers, sortingType) => {
  switch (sortingType) {
    case SortingType.PRICE_LOW:
      return [...offers].sort((a, b) => (a.price - b.price));
    case SortingType.PRICE_HIGH:
      return [...offers].sort((a, b) => (b.price - a.price));
    case SortingType.RATING:
      return [...offers].sort((a, b) => (b.rating - a.rating));
    default:
      return [...offers];
  }
};
