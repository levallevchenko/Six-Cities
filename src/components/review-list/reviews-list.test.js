import React from 'react';
import {render} from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {NameSpace} from '../../store/root-reducer';
import ReviewList from './review-list';

const mockStore = configureStore({});
jest.spyOn(redux, `useSelector`);
it(`ReviewList should render correctly`, () => {
  const testReviews = [{user: {id: 1, avatarUrl: `1`}}, {id: 2, user: {avatarUrl: `2`}}];
  const store = mockStore({
    [NameSpace.APP]: {
      error: false,
    },
    [NameSpace.OFFERS]: {
      reviews: [{user: {id: 1, avatarUrl: `1`}}, {id: 2, user: {avatarUrl: `2`}}],
    },

  });

  const {container} = render(
      <redux.Provider store={store}>
        <ReviewList reviews={testReviews} />
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
