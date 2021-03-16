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
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearbyOffers(data)))
);

export const postComment = ({review: comment, rating}, id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.loadComment(true));
  api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.setComment(data)))
    .catch(() => {});
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.setAuthInfo(data)))
    .then(() => dispatch(ActionCreator.loadAuthInfo(true)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.setAuthInfo(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
    .catch(() => {})
);
