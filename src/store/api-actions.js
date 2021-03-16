import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOfferData(data)))
    .catch(() => dispatch(ActionCreator.setNotFoundOffer()))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
    .catch(() => dispatch(ActionCreator.loadReviews([])))
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearbyOffers(data)))
    .catch(() => dispatch(ActionCreator.loadNearbyOffers([])))
);

export const postComment = ({review: comment, rating}, id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.loadComment(true));
  return api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.setComment(data)))
    .catch((err) => {
      dispatch(ActionCreator.loadComment(false));
      dispatch(ActionCreator.setError(err.message));
      setTimeout(() => {
        dispatch(ActionCreator.setError(null));
      }, 3000);
    });
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.setAuthInfo(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.setAuthInfo(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
    .catch(() => {})
    // to-do: добавить обработку
);
