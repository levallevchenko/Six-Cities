import PropTypes from 'prop-types';

export const reviewPropTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.array.isRequired,
    date: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      userId: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    })
  }))
};

export const reviewStarPropTypes = {
  id: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired
};
