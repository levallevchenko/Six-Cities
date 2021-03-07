import {AuthorizationStatus} from '../../const';
import {ActionType} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.SET_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload
      };
    default:
      return state;
  }
};

export {user};
