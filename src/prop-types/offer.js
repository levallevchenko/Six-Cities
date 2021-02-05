import PropTypes from 'prop-types';

export const offerPropTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    hotelName: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired
  }))
};
