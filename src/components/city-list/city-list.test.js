import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {NameSpace} from '../../store/root-reducer';
import CityList from './city-list';

const mockStore = configureStore();

jest.spyOn(redux, `useSelector`);
jest.spyOn(redux, `useDispatch`);

describe(`CityList test`, () => {
  it(`CityList should render correctly`, () => {

    const store = mockStore({
      [NameSpace.OFFERS]: {
        activeCity: `Paris`,
      },
    });

    render(
        <redux.Provider store={store}>
          <CityList />
        </redux.Provider>
    );

    expect(screen.getByText(`Paris`)).toBeInTheDocument();
  });
});
