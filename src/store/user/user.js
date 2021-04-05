import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import {ActionType} from '../action';

export const initialState = {
  authStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {},
  isAuthInfoLoaded: false,
  isCorrectValue: true,
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.REQUIRED_AUTHORIZATION, (state, action) => {
    state.authStatus = action.payload;
    state.isAuthInfoLoaded = true;
  });
  builder.addCase(ActionType.SET_AUTH_INFO, (state, action) => {
    state.authInfo = action.payload;
  });
  builder.addCase(ActionType.LOAD_AUTH_INFO, (state, action) => {
    state.isAuthInfoLoaded = action.payload;
  });
  builder.addCase(ActionType.CHECK_LOGIN, (state, action) => {
    state.isCorrectValue = action.payload;
  });
});

export {user};
