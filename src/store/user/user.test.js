import {ActionType} from '../action';
import {initialState, user} from './user';
import {authInfoMock} from './user-test-mocks';
import {AuthorizationStatus} from '../../const';

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
