import {ActionType} from '../action';
import {initialState, app} from './app';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(app(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should set error by setError action creator`, () => {
    const expectedState = {
      ...initialState,
      error: `test`
    };

    const setErrorAction = {
      type: ActionType.SET_ERROR,
      payload: `test`
    };

    expect(app(initialState, setErrorAction)).toEqual(expectedState);
  });
});
