import React from 'react';
import {render} from '@testing-library/react';
import ReviewStar from './review-star';

it(`ReviewStar should render correctly`, () => {

  const testProps = {
    id: 1,
    onInputChange: jest.fn(),
    rating: `5`,
    title: ``,
    checked: ``,
  };

  const {container} = render(
      <ReviewStar testProps={testProps} />
  );

  expect(container).toMatchSnapshot();
});
