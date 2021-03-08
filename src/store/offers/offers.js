import {createReducer} from '@reduxjs/toolkit';
import {CityName, SortingType} from '../../const';
import {ActionType} from '../action';
import {adaptOffersData} from '../../services/adapter';

const initialState = {
  activeSorting: SortingType.POPULAR,
  activeCity: CityName.PARIS,
  isOffersLoaded: false,
  offers: [],
};

const offers = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.CHANGE_CITY, (state, action) => {
    state.activeCity = action.payload;
  });
  builder.addCase(ActionType.CHANGE_SORTING, (state, action) => {
    state.activeSorting = action.payload;
  });
  builder.addCase(ActionType.LOAD_OFFERS, (state, action) => {
    state.offers = adaptOffersData(action.payload);
    state.isOffersLoaded = true;
  });
});

export {offers};
