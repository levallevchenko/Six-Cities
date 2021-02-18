import PropTypes from 'prop-types';

export const offerPropTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    offer: PropTypes.shape({
      bedrooms: PropTypes.number.isRequired,
      city: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
      description: PropTypes.array.isRequired,
      goods: PropTypes.arrayOf(PropTypes.string.isRequired),
      host: PropTypes.shape({
        avatarUrl: PropTypes.string,
        userId: PropTypes.number.isRequired,
        isUserPro: PropTypes.bool.isRequired,
        userName: PropTypes.string.isRequired,
      }),
      hotelId: PropTypes.string.isRequired,
      previewSrc: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      isPremium: PropTypes.bool.isRequired,
      hotelImages: PropTypes.arrayOf(PropTypes.string.isRequired),
      price: PropTypes.number.isRequired,
      maxAdults: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      hotelName: PropTypes.string.isRequired,
      offerType: PropTypes.string.isRequired
    })
  })).isRequired
};
