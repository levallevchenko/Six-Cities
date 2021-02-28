import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SortingTypes} from '../../const';
import {ActionCreator} from '../../store/action';

const OfferSorting = (props) => {
  const {activeSorting, onChangeSorting} = props;
  const [openedSorting, setOpenedSorting] = useState(false);

  const handleSortingArrowClick = () => {
    setOpenedSorting((prevState) => !prevState);
  };

  const handleSortingChange = (evt) => {
    onChangeSorting(evt.target.innerText);
    setOpenedSorting(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingArrowClick}>
        {activeSorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {openedSorting &&
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(SortingTypes).map((sortingType, id) => (
          <li className={classNames(`places__option`, {'places__option--active': sortingType === activeSorting})}
            key={sortingType + id}
            tabIndex={0}
            onClick={handleSortingChange}>{sortingType}</li>
        ))}
      </ul>}
    </form>

  );
};

const mapStateToProps = (state) => ({
  activeSorting: state.activeSorting
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSorting(sorting) {
    dispatch(ActionCreator.changeSorting(sorting));
  }
});

OfferSorting.propTypes = {
  activeSorting: PropTypes.string.isRequired,
  onChangeSorting: PropTypes.func.isRequired
};

export {OfferSorting};
export default connect(mapStateToProps, mapDispatchToProps)(OfferSorting);
