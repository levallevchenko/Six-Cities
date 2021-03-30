import {createSelector} from 'reselect';
import {getCityOffers, sortOffers, sortReviews} from '../../utils/project';
import {getUniqueArray} from '../../utils/common';
import {NameSpace} from '../root-reducer';

const offersState = (state) => state[NameSpace.OFFERS];

export const getOffers = (state) => offersState(state).offers;
export const getReviews = (state) => offersState(state).reviews;
export const getFavoriteOffers = (state) => offersState(state).favoriteOffers;
export const getActiveCity = (state) => offersState(state).activeCity;
export const getActiveSorting = (state) => offersState(state).activeSorting;

export const getSortedCityOffers = createSelector(
    [getOffers, getActiveCity, getActiveSorting],
    (offers, city, sortingType) => {
      const cityOffers = getCityOffers(offers, city);
      return sortOffers(cityOffers, sortingType);
    }
);

export const getFavoriteOfferCities = createSelector(
    [getFavoriteOffers],
    (favoriteOffers) => {
      const favoriteOfferCities = favoriteOffers.map((offer) => offer.city.name);
      const uniqueOfferCities = getUniqueArray(favoriteOfferCities);
      return uniqueOfferCities;
    }
);

export const getFavorite = (hotelId) => createSelector(
    [getFavoriteOffers],
    (favoriteOffers) => favoriteOffers.find((item) => item.hotelId === hotelId)
);

export const getSortedReviews = createSelector(
    [getReviews],
    (reviews) => sortReviews(reviews)
);
