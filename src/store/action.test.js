import {ActionType, ActionCreator} from './action';

describe(`Action creators work correctly`, () => {
  it(`changeCity action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: `test`,
    };

    expect(ActionCreator.changeCity(`test`)).toEqual(expectedAction);
  });

  it(`changeSorting action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORTING,
      payload: `test`,
    };

    expect(ActionCreator.changeSorting(`test`)).toEqual(expectedAction);
  });

  it(`loadOffers action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: `test`,
    };

    expect(ActionCreator.loadOffers(`test`)).toEqual(expectedAction);
  });

  it(`loadOfferData action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER_DATA,
      payload: `test`,
    };

    expect(ActionCreator.loadOfferData(`test`)).toEqual(expectedAction);
  });

  it(`loadNearbyOffers action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: `test`,
    };

    expect(ActionCreator.loadNearbyOffers(`test`)).toEqual(expectedAction);
  });

  it(`loadReviews action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: `test`,
    };

    expect(ActionCreator.loadReviews(`test`)).toEqual(expectedAction);
  });

  it(`loadFavoriteOffers action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: `test`,
    };

    expect(ActionCreator.loadFavoriteOffers(`test`)).toEqual(expectedAction);
  });

  it(`addFavorite action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.ADD_FAVORITE,
      payload: `test`,
    };

    expect(ActionCreator.addFavorite(`test`)).toEqual(expectedAction);
  });

  it(`removeFavorite action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REMOVE_FAVORITE,
      payload: `test`,
    };

    expect(ActionCreator.removeFavorite(`test`)).toEqual(expectedAction);
  });

  it(`setComment action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_COMMENT,
      payload: `test`,
    };

    expect(ActionCreator.setComment(`test`)).toEqual(expectedAction);
  });

  it(`loadComment action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENT,
      payload: `test`,
    };

    expect(ActionCreator.loadComment(`test`)).toEqual(expectedAction);
  });

  it(`setNotFoundOffer action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_NOT_FOUND_OFFER,
    };

    expect(ActionCreator.setNotFoundOffer()).toEqual(expectedAction);
  });

  it(`loadAuthInfo action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_AUTH_INFO,
      payload: `test`,
    };

    expect(ActionCreator.loadAuthInfo(`test`)).toEqual(expectedAction);
  });

  it(`setOffersLoadingFailed action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_OFFERS_LOADING_FAILED,
    };

    expect(ActionCreator.setOffersLoadingFailed()).toEqual(expectedAction);
  });

  it(`setAuthInfo action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_AUTH_INFO,
      payload: `test`,
    };

    expect(ActionCreator.setAuthInfo(`test`)).toEqual(expectedAction);
  });

  it(`requireAuthorization action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `test`,
    };

    expect(ActionCreator.requireAuthorization(`test`)).toEqual(expectedAction);
  });

  it(`redirectToRoute action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `test`,
    };

    expect(ActionCreator.redirectToRoute(`test`)).toEqual(expectedAction);
  });

  it(`setError action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_ERROR,
      payload: `test`,
    };

    expect(ActionCreator.setError(`test`)).toEqual(expectedAction);
  });
});
