import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {NameSpace} from '../../store/root-reducer';
import {AuthorizationStatus} from '../../const';
import Room from './room';

const mockStore = configureStore();

jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);

describe(`Room component test`, () => {
  it(`Room should render correctly`, () => {
    const history = createMemoryHistory();

    const testOffer = {
      city: {
        name: `Paris`,
        location: {latitude: 1, longitude: 1}
      },
      location: {latitude: 1, longitude: 1},
      hotelId: 1,
      hotelName: ``,
      rating: ``,
      offerType: ``,
      bedrooms: 1,
      maxAdults: 1,
      price: 1,
      goods: [],
      host: {id: 1},
      description: ``,
      isPremium: true,
      hotelImages: [],
    };

    const testNearbyOffers = [
      {hotelId: 1, location: {latitude: 1, longitude: 1}},
      {hotelId: 2, location: {latitude: 2, longitude: 2}},
    ];

    const store = mockStore({
      [NameSpace.APP]: {
        error: false,
      },
      [NameSpace.USER]: {
        authStatus: AuthorizationStatus.AUTH,
        authInfo: {email: `test`, password: `test`}
      },
      [NameSpace.OFFERS]: {
        favoriteOffers: [{}, {}],
        offer: {},
        reviews: [
          {id: 1, user: {avatarUrl: `1`}, date: `1`},
          {id: 2, user: {avatarUrl: `2`}, date: `2`}
        ],
      },
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Room location={testOffer.location} offer={testOffer} nearbyOffers={testNearbyOffers} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Meet the host`)).toBeInTheDocument();
  });
});
