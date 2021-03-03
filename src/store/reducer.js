import {CityNames, SortingTypes, AuthorizationStatus} from '../const';
import {ActionType} from './action';
import {adaptOffersData} from '../services/adapter';
// import {offers} from '../mocks/offers';

const initialState = {
  activeSorting: SortingTypes.POPULAR,
  activeCity: CityNames.PARIS,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isOffersLoaded: false,
  offers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };
    case ActionType.CHANGE_SORTING:
      return {
        ...state,
        activeSorting: action.payload
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: adaptOffersData(action.payload),
        isOffersLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
