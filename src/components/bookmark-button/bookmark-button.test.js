import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {NameSpace} from '../../store/root-reducer';
import {AuthorizationStatus} from '../../const';
import BookmarkButton from './bookmark-button';

const mockStore = configureStore({});
it(`BookmarkButton should render correctly`, () => {
  const history = createMemoryHistory();

  const store = mockStore({
    [NameSpace.USER]: {
      authStatus: AuthorizationStatus.NO_AUTH,
      isAuthInfoLoaded: true,
    },
    [NameSpace.OFFERS]: {
      favoriteOffers: [{}],
    },
  });

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <BookmarkButton markupBlock={`test__`} hotelId={1} />
        </Router>
      </Provider>
  );

  expect(container).toMatchSnapshot();
});
