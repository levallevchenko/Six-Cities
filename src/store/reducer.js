import {CityNames} from '../const';
import {ActionType} from './action';
import {offers} from '../mocks/offers';

const initialState = {
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
    default:
      return state;
  }
};


export {reducer};
