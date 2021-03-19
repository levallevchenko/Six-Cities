import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import {ActionType} from '../action';

const initialState = {
  authStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {},
  isAuthInfoLoaded: false,
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
});

export {user};
