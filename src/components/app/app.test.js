import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {NameSpace} from '../../store/root-reducer';
import {AuthorizationStatus} from '../../const';
import App from './app';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'Main' page when user navigate to '/' url`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthorizationStatus.NO_AUTH,
        isAuthInfoLoaded: true
      },
      [NameSpace.OFFERS]: {
        offers: [],
        isOffersLoaded: true,
      }
    });

    const history = createMemoryHistory();
    history.push(`/`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Paris`)).toBeInTheDocument();
  });

  it(`Render 'Room' page when user navigate to '/offer/:id' url`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthorizationStatus.NO_AUTH,
        isAuthInfoLoaded: true
      },
      [NameSpace.OFFERS]: {
        offer: {
          city: {location: {}},
          hotelImages: [],
          hotelId: 1,
          goods: [],
          host: {isUserPro: true},
          location: {
            latitude: 1,
            longitude: 1,
          },
        },
        reviews: [{user: {avatarUrl: `1`}}],
        nearbyOffers: [],
        favoriteOffers: [],
        isOffersLoaded: true,
      },
      [NameSpace.APP]: {
        error: null,
      }
    });

    const history = createMemoryHistory();
    history.push(`/offer/1`);
    store.dispatch = () => Promise.resolve();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Meet the host`)).toBeInTheDocument();
  });

  it(`Render 'Sign in' page when user navigate to '/login' url`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthorizationStatus.NO_AUTH,
        isAuthInfoLoaded: true
      },
      [NameSpace.OFFERS]: {
        offers: [],
        isOffersLoaded: true,
      },
    });
    const history = createMemoryHistory();
    history.push(`/login`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`login`)).toBeInTheDocument();
    expect(screen.getByTestId(`password`)).toBeInTheDocument();
  });

  it(`Render 'Favorite' page when user navigate to '/favorites' url`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthorizationStatus.AUTH,
        isAuthInfoLoaded: true,
        authInfo: {}
      },
      [NameSpace.OFFERS]: {
        offers: [],
        favoriteOffers: [],
      },
    });

    const history = createMemoryHistory();
    history.push(`/favorites`);
    store.dispatch = () => Promise.resolve();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Saved listing`)).toBeInTheDocument();
  });

  it(`Render 'NotFound' page when user navigate to nonexistent url`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authStatus: AuthorizationStatus.NO_AUTH,
        isAuthInfoLoaded: true
      },
    });

    const history = createMemoryHistory();
    history.push(`404`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`404. Page Not Found`)).toBeInTheDocument();
    expect(screen.getByText(`Return to main page`)).toBeInTheDocument();
  });
});
