import React from 'react';
import {render} from '@testing-library/react';
import Review from './review';

it(`Review should render correctly`, () => {

  const review = {
    id: 1,
    user: {userId: 1, avatarUrl: `1`},
    comment: ``,
    date: ``,
    reting: ``
  };

  const {container} = render(
      <Review review={review} />
  );

  expect(container).toMatchSnapshot();
});
