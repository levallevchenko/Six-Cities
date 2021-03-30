import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action';

export const initialState = {
  error: null,
};

const app = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.SET_ERROR, (state, action) => {
      state.error = action.payload;
    });
});

export {app};
