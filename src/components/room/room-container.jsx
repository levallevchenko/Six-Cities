import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchNearbyOffers, fetchOffer, fetchReviews} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Room from './room';
import NotFound from '../not-found/not-found';

const RoomContainer = () => {
  const {offer, reviews, nearbyOffers, offerNotFound} = useSelector((state) => state.OFFERS);
  const {hotelId} = offer;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffer(hotelId));
    dispatch(fetchReviews(hotelId));
    dispatch(fetchNearbyOffers(hotelId));
  }, [hotelId]);

  if (offerNotFound) {
    return <NotFound />;
  }

  return (
    !offer ? <LoadingScreen /> : <Room offer={offer} reviews={reviews} nearbyOffers={nearbyOffers} />
  );
};

export default RoomContainer;
