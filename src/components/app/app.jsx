import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../prop-types/offer';
import {reviewPropTypes} from '../../prop-types/review';
import browserHistory from '../../browser-history';
import Main from '../main/main';
import Room from '../room/room';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../const';

const App = (props) => {
  const {offers, reviews, nearbyOffersArray} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room offer = {offers[0]} reviews = {reviews[0]} nearbyOffers = {nearbyOffersArray[0]} />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <Login />
        </Route>
        <PrivateRoute exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites offers = {offers} />}
        >
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
  nearbyOffersArray: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default App;
