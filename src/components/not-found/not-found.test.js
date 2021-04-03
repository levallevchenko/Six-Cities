import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {NameSpace} from '../../store/root-reducer';
import NotFound from './not-found';

const mockStore = configureStore({});
const store = mockStore({
  [NameSpace.USER]: {
    authStatus: `NO_AUTH`,
    authInfo: {}
  }
});

it(`NotFound page should render correctly`, () => {
  jest.spyOn(redux, `useSelector`);
  const history = createMemoryHistory();

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <NotFound />
        </Router>
      </redux.Provider>
  );
  expect(container).toMatchSnapshot();
});
