import {CityNames, SortingTypes} from '../const';
import {ActionType} from './action';
import {offers} from '../mocks/offers';

const initialState = {
  activeSorting: SortingTypes.POPULAR,
  activeCity: CityNames.PARIS,
  offers,
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
    default:
      return state;
  }
};

export {reducer};
