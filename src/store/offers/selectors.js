import {NameSpace} from '../root-reducer';

export const getActiveSorting = (state) => state[NameSpace.OFFERS].activeSorting;
export const getActiveCity = (state) => state[NameSpace.OFFERS].activeCity;
export const getIsOffersLoaded = (state) => state[NameSpace.OFFERS].isOffersLoaded;
export const getOffers = (state) => state[NameSpace.OFFERS].offers;
