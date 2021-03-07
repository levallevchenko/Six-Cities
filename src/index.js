import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import {ActionCreator} from './store/action';
import {redirect} from "./store/middlewares/redirect";
import {createAPI} from './services/api';
import {checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import App from './components/app/app';
import {offers, nearbyOffersArray} from '../src/mocks/offers';
import {reviews} from '../src/mocks/reviews';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth()).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          offers = {offers} reviews = {reviews} nearbyOffersArray = {nearbyOffersArray}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});
