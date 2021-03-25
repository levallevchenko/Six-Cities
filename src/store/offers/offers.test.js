import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType} from '../action';
import {fetchOffersList, fetchOffer, fetchFavorites, postComment, postFavorite} from '../api-actions';
import {fetchReviews, fetchNearbyOffers} from '../api-actions';
import {initialState, offers} from './offers';
import {offersMock, offersAdaptedMock, favoriteOffersMock, favoriteOffersAdaptedMock, offerDataMock, offerDataAdaptedMock} from './offers-test-mocks';
import {reviewsMock, reviewsAdaptedMock, reviewDataMock} from './reviews-test-mocks';
import {APIRoute, AppRoute} from '../../const';

const api = createAPI(() => {});

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

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOffersListLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, offersMock);

    return fetchOffersListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: offersMock,
        });
      });
  });

  it(`Should make a correct API call to /hotels/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOfferDataLoader = fetchOffer(1);

    apiMock
      .onGet(`/hotels/1`)
      .reply(200, offerDataMock);

    return fetchOfferDataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER_DATA,
          payload: offerDataMock,
        });
      });
  });

  // Заменила на круглые скобки
  it(`Should make a correct API call to /comments/id to get reviews`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchReviewsLoader = fetchReviews(1);

    apiMock
      .onGet(`comments/1`)
      .reply(200, reviewsMock);

    return fetchReviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: reviewsMock,
        });
      });
  });

  // Заменила на круглые скобки
  it(`Should make a correct API call to /hotels/id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchNearbyOffersLoader = fetchNearbyOffers(1);

    apiMock
      .onGet(`/hotels/1/nearby`)
      .reply(200, offersMock);

    return fetchNearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: offersMock,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoritesLoader = fetchFavorites();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, offersMock);

    return fetchFavoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: offersMock,
        });
      });
  });

  it(`Should make a correct API call to /comments/id to post review`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postCommentLoader = postComment(reviewDataMock, 1);

    apiMock
      .onPost(`/comments/1`)
      .reply(200, [...reviewsMock, reviewDataMock]);

    return postCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENT,
          payload: true,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_COMMENT,
          payload: [...reviewsMock, reviewDataMock],
        });
      });
  });

  it(`Should make a correct API call to /favorite/id/status to mark offer as favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postFavoriteLoader = postFavorite(1, 1);

    apiMock
      .onPost(`/favorite/1/1`)
      .reply(200, {...offerDataMock, "is_favorite": true});

    return postFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_FAVORITE,
          payload: {...offerDataMock, "is_favorite": true}
        });
      });
  });

  it(`Should make a correct API call to /favorite/id/status to mark offer as not favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postFavoriteLoader = postFavorite(1, 0);

    apiMock
      .onPost(`/favorite/1/0`)
      .reply(200, {...offerDataMock, "is_favorite": false});

    return postFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REMOVE_FAVORITE,
          payload: {...offerDataMock, "is_favorite": false}
        });
      });
  });
});

describe(`Async operation catch errors correctly`, () => {
  it(`Should catch offers load error`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOffersListLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(500);

    return fetchOffersListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFERS_LOADING_FAILED,
        });
      });
  });

  it(`Should catch bad request to offer`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOfferLoader = fetchOffer(0);

    apiMock
      .onGet(`/hotels/0`)
      .reply(404);

    return fetchOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_NOT_FOUND_OFFER,
        });
      });
  });

  // Заменила на круглые скобки
  it(`Should catch reviews load error`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchReviewsLoader = fetchReviews(0);

    apiMock
      .onGet(`/comments/0`)
      .reply(500, `error`);

    return fetchReviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [],
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_ERROR,
          payload: `Request failed with status code 500`
        });
      });
  });

  // Заменила на круглые скобки
  it(`Should catch nearby offers load error`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchNearbyOffersLoader = fetchNearbyOffers(0);

    apiMock
      .onGet(`/hotels/0/nearby`)
      .reply(500, `error`);

    return fetchNearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: [],
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_ERROR,
          payload: `Request failed with status code 500`
        });
      });
  });

  // // Исправить ошибку
  // it(`Should catch network problems error when post comment`, () => {
  //   const apiMock = new MockAdapter(api);
  //   const dispatch = jest.fn();
  //   const postCommentLoader = postComment(reviewDataMock, 0);

  //   apiMock
  //     .onPost(`/comments/0`)
  //     .reply(400, {});

  //   return postCommentLoader(dispatch, () => {}, api)
  //   .then(() => {
  //     expect(dispatch).toHaveBeenCalledTimes(3);
  //     expect(dispatch).toHaveBeenNthCalledWith(1, {
  //       type: ActionType.LOAD_COMMENT,
  //       payload: true
  //     });
  //   })
  //   .then(() => {
  //     expect(dispatch).toHaveBeenNthCalledWith(2, {
  //       type: ActionType.SET_ERROR,
  //       payload: `Invalid data format`
  //     });

  //     expect(dispatch).toHaveBeenNthCalledWith(3, {
  //       payload: {}
  //     });
  //   });
  // });

  it(`Should catch no authorization status when mark offer as favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postFavoriteLoader = postFavorite(1, 1);

    apiMock
      .onPost(`/favorite/1/1`)
      .reply(401, AppRoute.SIGN_IN);

    return postFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.SIGN_IN
        });
      });
  });

  it(`Should catch no authorization status when mark offer as not favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postFavoriteLoader = postFavorite(1, 0);

    apiMock
      .onPost(`/favorite/1/0`)
      .reply(401, AppRoute.SIGN_IN);

    return postFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.SIGN_IN
        });
      });
  });
});
