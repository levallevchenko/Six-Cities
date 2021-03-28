import React, {useEffect} from 'react';
import {Switch, Route, Router as BrowserRouter, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import browserHistory from '../../browser-history';
import {AppRoute, AuthorizationStatus} from '../../const';
import {checkAuth} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Main from '../main/main';
import RoomContainer from '../room/room-container';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';

const App = () => {
  const {isAuthInfoLoaded, authStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();

  const isAuthorized = authStatus === AuthorizationStatus.AUTH;

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
          {isAuthorized ? <Redirect to={AppRoute.MAIN} /> : <Login />}
        </Route>
        <PrivateRoute exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites />}
        >
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
