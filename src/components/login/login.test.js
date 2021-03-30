import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import Login from './login';

const mockStore = configureStore({});
const useSelectorMock = jest.spyOn(redux, `useSelector`);
useSelectorMock.mockReturnValue({username: `test`});

it(`Login page should render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <Login />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Paris`)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`login`), `keks`);
  userEvent.type(screen.getByTestId(`password`), `123456`);

  expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
});
