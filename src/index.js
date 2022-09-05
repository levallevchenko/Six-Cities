import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import browserHistory from './browser-history';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';
import {ActionCreator} from './store/action';
import {redirect} from "./store/middlewares/redirect";
import {createAPI} from './services/api';
import {AuthorizationStatus} from "./const";
import App from './components/app/app';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

ReactDOM.render(
    <Provider store={store}>
      <HashRouter history={browserHistory}>
        <App />
      </HashRouter>
    </Provider>,
    document.querySelector(`#root`)
);
