import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import {NameSpace} from '../../store/root-reducer';
import {AuthorizationStatus} from '../../const';
import RoomContainer from './room-container';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);

it(`RoomContainer should render correctly`, () => {
  const history = createMemoryHistory();

  const store = mockStore({
    [NameSpace.APP]: {
      error: null,
    },
    [NameSpace.USER]: {
      authStatus: AuthorizationStatus.NO_AUTH,
      isAuthInfoLoaded: true,
    },
    [NameSpace.OFFERS]: {
      offer: {
        hotelId: 1,
        location: {latitude: 1, longitude: 1},
        hotelImages: [],
        city: {location: {latitude: 1, longitude: 1}},
        goods: [],
        host: {isUserPro: true}
      },
      reviews: [{user: {avatarUrl: ``}}],
      nearbyOffers: [
        {hotelId: 1, location: {latitude: 1, longitude: 1}},
        {hotelId: 2, location: {latitude: 2, longitude: 2}},
      ],
      offerNotFound: false,
      favoriteOffers: [],
    },
  });

  store.dispatch = () => Promise.resolve();

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <RoomContainer />
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
