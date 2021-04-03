import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {NameSpace} from '../../store/root-reducer';
import Main from './main';

const mockStore = configureStore();

jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);

it(`Main should render correctly`, () => {

  const store = mockStore({
    [NameSpace.USER]: {
      authInfo: {},
    },
    [NameSpace.OFFERS]: {
      offers: [{city: {name: `test`}}],
      favoriteOffers: [],
      activeCity: ``,
      isOffersLoaded: true,
      isOffersLoadingFailed: false,
    },
  });

  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Paris`)).toBeInTheDocument();
});
