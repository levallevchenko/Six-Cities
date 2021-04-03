import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {NameSpace} from '../../store/root-reducer';
import ReviewForm from './review-form';

const mockStore = configureStore();

it(`ReviewForm should render correctly`, () => {

  const store = mockStore({
    [NameSpace.OFFERS]: {
      offer: {}
    },
  });

  render(
      <Provider store={store}>
        <ReviewForm />
      </Provider>
  );

  expect(screen.getByText(`Your review`)).toBeInTheDocument();
  expect(screen.getByText(`Submit`)).toBeInTheDocument();
});
