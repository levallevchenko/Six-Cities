import React, {useEffect} from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../prop-types/offer';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';
import {checkAuth} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Main from '../main/main';
import RoomContainer from '../room/room-container';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';

const App = ({offers}) => {
  const {isAuthInfoLoaded} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthInfoLoaded) {
      dispatch((checkAuth()));
    }
  }, [isAuthInfoLoaded]);

  if (!isAuthInfoLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomContainer />
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
};

export default App;
