import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {NameSpace} from '../../store/root-reducer';
import {AuthorizationStatus} from '../../const';
import Header from './header';

const mockStore = configureStore();
it(`Header page should render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    [NameSpace.USER]: {
      authStatus: AuthorizationStatus.NO_AUTH,
      isAuthInfoLoaded: true,
    },
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
  );

  expect(screen.getByTestId(`header`)).toBeInTheDocument();
  expect(screen.getByTestId(`header-logo`)).toBeInTheDocument();
  expect(screen.getByTestId(`header-nav`)).toBeInTheDocument();
});
