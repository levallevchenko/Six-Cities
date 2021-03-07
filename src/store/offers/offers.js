import {CityName, SortingType} from '../../const';
import {ActionType} from '../action';
import {adaptOffersData} from '../../services/adapter';

const initialState = {
  activeSorting: SortingType.POPULAR,
  activeCity: CityName.PARIS,
  isOffersLoaded: false,
  offers: [],
};

const offers = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export {offers};
