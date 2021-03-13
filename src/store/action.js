export const ActionType = {
  CHANGE_CITY: `offers/changeCity`,
  CHANGE_SORTING: `offers/changeSorting`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_OFFER_DATA: `offers/loadOfferData`,
  LOAD_REVIEWS: `offers/loadReviews`,
  LOAD_NEARBY_OFFERS: `offers/loadNearbyOffers`,
  SET_COMMENT: `offers/setComment`,
  SET_NOT_FOUND_OFFER: `offers/setNotFoundOffer`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_AUTH_INFO: `user/login`,
  LOAD_AUTH_INFO: `user/loadAuthInfo`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSorting: (sorting) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sorting
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOfferData: (offer) => ({
    type: ActionType.LOAD_OFFER_DATA,
    payload: offer,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  loadNearbyOffers: (nearby) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: nearby,
  }),
  setComment: (comment) => ({
    type: ActionType.SET_COMMENT,
    payload: comment
  }),
  setNotFoundOffer: () => ({
    type: ActionType.SET_NOT_FOUND_OFFER,
  }),
  setAuthInfo: (info) => ({
    type: ActionType.SET_AUTH_INFO,
    payload: info
  }),
  loadAuthInfo: (info) => ({
    type: ActionType.LOAD_AUTH_INFO,
    payload: info
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  })
};
