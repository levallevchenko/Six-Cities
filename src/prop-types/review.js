import PropTypes from 'prop-types';

export const reviewPropTypes = {
  reviews: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.objectOf(PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      userId: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }))
  })))
};

export const reviewStarPropTypes = {
  id: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired
};
