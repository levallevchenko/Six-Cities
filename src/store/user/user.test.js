import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType} from '../action';
import {checkAuth, login} from '../api-actions';
import {initialState, user} from './user';
import {authInfoMock} from './user-test-mocks';
import {AuthorizationStatus, APIRoute, AppRoute} from '../../const';

const api = createAPI(() => {});

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should set authorithation info by setAuthInfo action creator`, () => {
    const expectedState = {
      ...initialState,
      authInfo: authInfoMock
    };

    const setAuthInfoAction = {
      type: ActionType.SET_AUTH_INFO,
      payload: authInfoMock
    };

    expect(user(initialState, setAuthInfoAction)).toEqual(expectedState);
  });

  it(`Reducer should load authorithation info by loadAuthInfo action creator`, () => {
    const expectedState = {
      ...initialState,
      isAuthInfoLoaded: true
    };

    const loadAuthInfoAction = {
      type: ActionType.LOAD_AUTH_INFO,
      payload: true
    };

    expect(user(initialState, loadAuthInfoAction)).toEqual(expectedState);
  });
  it(`Reducer should change authorization status to AUTH by requireAuthorization action creator`, () => {
    const expectedState = {
      ...initialState,
      authStatus: AuthorizationStatus.AUTH,
      isAuthInfoLoaded: true
    };

    const requireAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };

    expect(user(initialState, requireAuthorizationAction)).toEqual(expectedState);
  });

  it(`Reducer should change authorization status to NO_AUTH by requireAuthorization action creator`, () => {
    const expectedState = {
      ...initialState,
      authStatus: AuthorizationStatus.NO_AUTH,
      isAuthInfoLoaded: true
    };

    const requireNoAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    };

    expect(user(initialState, requireNoAuthorizationAction)).toEqual(expectedState);
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, {});

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH_INFO,
          payload: {},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login(authInfoMock);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, authInfoMock);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH_INFO,
          payload: authInfoMock,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });
});
