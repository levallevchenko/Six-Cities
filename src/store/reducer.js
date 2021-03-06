import {CityName, SortingType, AuthorizationStatus} from '../const';
import {ActionType} from './action';
import {adaptOffersData} from '../services/adapter';

const initialState = {
  activeSorting: SortingType.POPULAR,
  activeCity: CityName.PARIS,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {},
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
    case ActionType.SET_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
