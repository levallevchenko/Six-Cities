import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import {ActionType} from '../action';

const initialState = {
  authStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.REQUIRED_AUTHORIZATION, (state, action) => {
    state.authStatus = action.payload;
  });
  builder.addCase(ActionType.SET_AUTH_INFO, (state, action) => {
    state.authInfo = action.payload;
  });
});

export {user};
