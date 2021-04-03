import React from 'react';
import {render} from '@testing-library/react';
// import {cardsFull} from '../../tests-mock';
import Map from './map';

describe(`Map component test`, () => {
  const location = {};
  const points = [{location: {latitude: 1, longitude: 1}}];
  const currentOffer = {location: {latitude: 1, longitude: 1}};

  it(`Main Map component should render correctly`, () => {
    const {container} = render(
        <Map
          location={location}
          points={points}
          isMainMap={true}
          currentOffer={currentOffer} />
    );

    expect(container).toMatchSnapshot();
  });

  it(`Room Map component should render correctly`, () => {
    const {container} = render(
        <Map
          location={location}
          points={points}
          isMainMap={false}
          currentOffer={currentOffer} />
    );

    expect(container).toMatchSnapshot();
  });
});
