import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {NameSpace} from '../../store/root-reducer';
import MainEmpty from './main-empty';

const mockStore = configureStore({});
jest.spyOn(redux, `useSelector`);

it(`MainEmpty should render correctly`, () => {
  const history = createMemoryHistory();

  const store = mockStore({
    [NameSpace.OFFERS]: {
      isOffersLoadingFailed: true,
    },
  });

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <MainEmpty />
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
