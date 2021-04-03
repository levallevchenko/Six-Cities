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
      city: ``,
    };

    const testReviews = [{
      id: 1,
      user: {userId: 1, avatarUrl: `1`},
      date: `1`},
    {
      id: 2,
      user: {userId: 2, avatarUrl: `2`},
      date: `2`
    }];

    const testNearbyOffers = [{hotelId: 1}, {hotelId: 2}];

    const store = mockStore({
      [NameSpace.APP]: {
        error: false,
      },
      [NameSpace.USER]: {
        authStatus: AuthorizationStatus.AUTH,
      },
      [NameSpace.OFFERS]: {
        favoriteOffers: [{}, {}],
      },
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Room offer={testOffer} reviews={testReviews} nearbyOffers={testNearbyOffers} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Paris`)).toBeInTheDocument();
  });
});
