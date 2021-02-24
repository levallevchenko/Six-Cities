import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {offerPropTypes} from '../../prop-types/offer';
import Main from '../main/main';
import Room from '../room/room';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import NotFound from '../not-found/not-found';


const App = (props) => {
  const {offers, reviews, nearbyOffersArray} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/offer/:id">
          <Room offer = {offers[0]} reviews = {reviews[0]} nearbyOffers = {nearbyOffersArray[0]} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites offers = {offers} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = offerPropTypes;

export default App;
