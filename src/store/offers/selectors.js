import {createSelector} from 'reselect';
import {getCityOffers, sortOffers} from '../../utils/project';
import {NameSpace} from '../root-reducer';

const offersState = (state) => state[NameSpace.OFFERS];

export const getOffers = (state) => offersState(state).offers;
export const getActiveCity = (state) => offersState(state).activeCity;
export const getActiveSorting = (state) => offersState(state).activeSorting;

export const getSortedCityOffers = createSelector(
    [getOffers, getActiveCity, getActiveSorting],
    (offers, city, sortingType) => {
      const cityOffers = getCityOffers(offers, city);
      sortOffers(cityOffers, sortingType);
    }
);
