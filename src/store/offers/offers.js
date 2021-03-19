import {createReducer} from '@reduxjs/toolkit';
import {CityName, SortingType} from '../../const';
import {ActionType} from '../action';
import {adaptOffersData, adaptOfferData, adaptReviewsData} from '../../services/adapter';

const initialState = {
  activeSorting: SortingType.POPULAR,
  activeCity: CityName.PARIS,
  isOffersLoaded: false,
  isCommentLoading: false,
  isOffersLoadingFailed: false,
  isCommentSubmit: false,
  offers: [],
  offer: null,
  reviews: [],
  nearbyOffers: [],
  offerNotFound: false,
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
  builder.addCase(ActionType.LOAD_OFFER_DATA, (state, action) => {
    state.offer = adaptOfferData(action.payload);
    state.offerNotFound = false;
  });
  builder.addCase(ActionType.LOAD_REVIEWS, (state, action) => {
    state.reviews = adaptReviewsData(action.payload);
  });
  builder.addCase(ActionType.LOAD_NEARBY_OFFERS, (state, action) => {
    state.nearbyOffers = adaptOffersData(action.payload);
  });
  builder.addCase(ActionType.SET_COMMENT, (state, action) => {
    state.isCommentLoading = false;
    state.reviews = adaptReviewsData(action.payload);
  });
  builder.addCase(ActionType.LOAD_COMMENT, (state, action) => {
    state.isCommentLoading = action.payload;
  });
  builder.addCase(ActionType.SUBMIT_COMMENT, (state, action) => {
    state.isCommentSubmit = action.payload;
  });
  builder.addCase(ActionType.SET_NOT_FOUND_OFFER, (state) => {
    state.offerNotFound = true;
  });
  builder.addCase(ActionType.SET_OFFERS_LOADING_FAILED, (state) => {
    state.isOffersLoadingFailed = true;
  });
});

export {offers};
