import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {NameSpace} from '../../store/root-reducer';
import Offer from './offer';

const mockStore = configureStore();

jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);

it(`Offer should render correctly`, () => {
  const testOffer = {
    previewSrc: `test`,
    hotelId: 1,
  };

  const testProps = {
    testOffer,
    сardType: `test`,
    onOfferFocus: jest.fn(),
    onOfferBlur: jest.fn()
  };

  const store = mockStore({
    [NameSpace.USER]: {
      authInfo: {},
    },
    [NameSpace.OFFERS]: {
      favoriteOffers: [{
        city: {
          name: `test`
        },
        hotelId: 1
      }],
    },
  });

  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Offer offer={testOffer} cardType={testProps.сardType} onOfferFocus={testProps.onOfferFocus} />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`/ night`)).toBeInTheDocument();
});
