import {SortingType} from '../const';

export const getUniqueArray = (array) => {
  const arraySet = new Set(array);
  const uniqueArray = Array.from(arraySet);
  return uniqueArray;
};

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

export const sortReviews = (reviews) =>
  [reviews].sort((previusReview, currentReview) => {
    const previusReviewDate = new Date(previusReview.date);
    const currentReviewDate = new Date(currentReview.date);
    return (currentReviewDate - previusReviewDate);
  });
