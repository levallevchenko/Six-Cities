import {combineReducers} from 'redux';
import {app} from './app/app';
import {offers} from './offers/offers';
import {user} from './user/user';

export const NameSpace = {
  APP: `APP`,
  OFFERS: `OFFERS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.APP]: app,
  [NameSpace.OFFERS]: offers,
  [NameSpace.USER]: user,
});
