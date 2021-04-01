import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import CityFavorites from './city-favorites';

it(`CityFavorites page should render correctly`, () => {
  const history = createMemoryHistory();
  const testProps = {
    offers: [],
    cardType: `FAVORITE`,
    city: `Paris`,
  };

  const {offers, cardType, city} = testProps;

  const {getByText} = render(
      <Router history={history}>
        <CityFavorites offers={offers} сardType={cardType} city={city} />
      </Router>
  );

  const headerElement = getByText(`Paris`);

  expect(headerElement).toBeInTheDocument();
});
