import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {offers, nearbyOffersArray} from '../src/mocks/offers';
import {reviews} from '../src/mocks/reviews';
import {reducer} from './store/reducer';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offers = {offers} reviews = {reviews} nearbyOffersArray = {nearbyOffersArray}
      />
    </Provider>,
    document.querySelector(`#root`)
);
