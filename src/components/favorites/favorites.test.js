import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {NameSpace} from '../../store/root-reducer';
import Favorites from './favorites';

const mockStore = configureStore();

jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);
it(`Favorites should render correctly`, () => {

  const store = mockStore({
    [NameSpace.USER]: {
      authInfo: {},
    },
    [NameSpace.OFFERS]: {
      favoriteOffers: [{
        city: {
          name: `test`
        }
      }],
    },
  });

  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Favorites />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Saved listing`)).toBeInTheDocument();
});
