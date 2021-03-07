import PropTypes from 'prop-types';

export const authInfoPropTypes = PropTypes.shape({
  email: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
});
