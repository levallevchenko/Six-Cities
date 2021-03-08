import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classNames from 'classnames';
import {SortingType} from '../../const';
import {ActionCreator} from '../../store/action';

const OfferSorting = () => {
  const {activeSorting} = useSelector((state) => state.OFFERS);
  const dispatch = useDispatch();

  const [openedSorting, setOpenedSorting] = useState(false);

  const handleSortingArrowClick = () => {
    setOpenedSorting((prevState) => !prevState);
  };

  const handleSortingChange = (evt) => {
    dispatch(ActionCreator.changeSorting(evt.target.innerText));
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
        {Object.values(SortingType).map((sortingType, id) => (
          <li className={classNames(`places__option`, {'places__option--active': sortingType === activeSorting})}
            key={sortingType + id}
            tabIndex={0}
            onClick={handleSortingChange}>{sortingType}</li>
        ))}
      </ul>}
    </form>

  );
};

export default OfferSorting;
