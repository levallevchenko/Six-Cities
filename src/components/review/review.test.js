import React from 'react';
import {render} from '@testing-library/react';
import Review from './review';

it(`Review should render correctly`, () => {

  const review = {
    user: {},
    comment: ``,
    date: ``,
    reting: ``
  };

  const {container} = render(
      <Review review={review} />
  );

  expect(container).toMatchSnapshot();
});
