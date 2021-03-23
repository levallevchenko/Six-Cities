import {ActionType} from '../action';
import {initialState, offers} from './offers';
import {offersMock, offersAdaptedMock, favoriteOffersMock, favoriteOffersAdaptedMock, offerDataMock, offerDataAdaptedMock} from './offers-test-mocks';
import {reviewsMock, reviewsAdaptedMock} from './reviews-test-mocks';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(offers(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change city by changeCity action creator`, () => {
    const expectedState = {
      ...initialState,
      activeCity: `test`
    };

    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: `test`
    };

    expect(offers(initialState, changeCityAction)).toEqual(expectedState);
  });

  it(`Reducer should change offers sorting by loadOffers action creator`, () => {
    const expectedState = {
      ...initialState,
      activeSorting: `test`
    };

    const changeSortingAction = {
      type: ActionType.CHANGE_SORTING,
      payload: `test`
    };

    expect(offers(initialState, changeSortingAction)).toEqual(expectedState);
  });

  it(`Reducer should load offers by loadOffers action creator`, () => {
    const expectedState = {
      ...initialState,
      offers: offersAdaptedMock,
      favoriteOffers: favoriteOffersAdaptedMock,
      isOffersLoaded: true
    };

    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offersMock
    };

    expect(offers(initialState, loadOffersAction)).toEqual(expectedState);
  });

  it(`Reducer should load offer by loadOfferData action creator`, () => {
    const expectedState = {
      ...initialState,
      offer: offerDataAdaptedMock,
      offerNotFound: false
    };

    const loadOfferDataAction = {
      type: ActionType.LOAD_OFFER_DATA,
      payload: offerDataMock
    };

    expect(offers(initialState, loadOfferDataAction)).toEqual(expectedState);
  });

  it(`Reducer should load reviews by loadReviews action creator`, () => {
    const expectedState = {
      ...initialState,
      reviews: reviewsAdaptedMock
    };

    const loadReviewsAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviewsMock
    };

    expect(offers(initialState, loadReviewsAction)).toEqual(expectedState);
  });

  it(`Reducer should load nearby offers by loadNearbyOffers action creator`, () => {
    const expectedState = {
      ...initialState,
      nearbyOffers: offersAdaptedMock,
    };

    const loadNearbyOffersAction = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: offersMock
    };

    expect(offers(initialState, loadNearbyOffersAction)).toEqual(expectedState);
  });

  it(`Reducer should load favorite offers by loadFavoriteOffers action creator`, () => {
    const expectedState = {
      ...initialState,
      favoriteOffers: favoriteOffersAdaptedMock,
    };

    const loadFavoriteOffersAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: favoriteOffersMock
    };

    expect(offers(initialState, loadFavoriteOffersAction)).toEqual(expectedState);
  });

  it(`Reducer should set comment by setComment action creator`, () => {
    const expectedState = {
      ...initialState,
      isCommentLoading: false,
      reviews: reviewsAdaptedMock
    };

    const setCommentAction = {
      type: ActionType.SET_COMMENT,
      payload: reviewsMock
    };

    expect(offers(initialState, setCommentAction)).toEqual(expectedState);
  });

  it(`Reducer should start comment load by loadComment action creator`, () => {
    const expectedState = {
      ...initialState,
      isCommentLoading: true,
    };

    const setCommentAction = {
      type: ActionType.LOAD_COMMENT,
      payload: true
    };

    expect(offers(initialState, setCommentAction)).toEqual(expectedState);
  });

  it(`Reducer should end comment load by loadComment action creator`, () => {
    const expectedState = {
      ...initialState,
      isCommentLoading: false,
    };

    const setCommentAction = {
      type: ActionType.LOAD_COMMENT,
      payload: false
    };

    expect(offers(initialState, setCommentAction)).toEqual(expectedState);
  });

  it(`Reducer should set not found offer status by setNotFoundOffer action creator`, () => {
    const expectedState = {
      ...initialState,
      offerNotFound: true,
    };

    const setNotFoundOfferAction = {
      type: ActionType.SET_NOT_FOUND_OFFER,
      payload: true
    };

    expect(offers(initialState, setNotFoundOfferAction)).toEqual(expectedState);
  });

  it(`Reducer should set offers loading faild status by setOffersLoadingFailed action creator`, () => {
    const expectedState = {
      ...initialState,
      isOffersLoadingFailed: true,
    };

    const setNotFoundOfferAction = {
      type: ActionType.SET_OFFERS_LOADING_FAILED,
      payload: true
    };

    expect(offers(initialState, setNotFoundOfferAction)).toEqual(expectedState);
  });
});
