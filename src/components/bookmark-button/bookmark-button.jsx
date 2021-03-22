import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {AuthorizationStatus, AppRoute} from '../../const';
import {postFavorite} from '../../store/api-actions';
import {FavoriteStatus} from '../../const';
import {getFavorite} from '../../store/offers/selectors';

const BookmarkButton = ({markupBlock, hotelId, width = `18`, height = `19`}) => {

  const isFavorite = useSelector(getFavorite(hotelId));
  const authStatus = useSelector((state) => state.USER);
  const history = useHistory();

  const dispatch = useDispatch();
  const onFavoriteButtonClick = (id, status) => dispatch(postFavorite(id, status));

  const handleBookmarkClick = () => {
    if (authStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.SIGN_IN);
    }
    onFavoriteButtonClick(hotelId,
        isFavorite
          ? FavoriteStatus.REMOVE
          : FavoriteStatus.ADD);
  };

  return (
    <button
      onClick={handleBookmarkClick}
      className={classNames(`${markupBlock}bookmark-button button`, {[`${markupBlock}bookmark-button--active`]: isFavorite})}
      type="button">
      <svg className={`${markupBlock}bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarkButton.propTypes = {
  markupBlock: PropTypes.string.isRequired,
  hotelId: PropTypes.number.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default BookmarkButton;
