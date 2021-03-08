import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classNames from 'classnames';
import {CityName} from '../../const';
import {ActionCreator} from '../../store/action';

const CityList = () => {
  const {activeCity} = useSelector((state) => state.OFFERS);
  const dispatch = useDispatch();

  const handleCityClick = (evt) => {
    evt.preventDefault();
    dispatch(ActionCreator.changeCity(evt.target.innerText));
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.values(CityName).map((city, id) => (<li className="locations__item" key={city + id}>
        <a className={classNames(`locations__item-link tabs__item`, {'tabs__item--active': city === activeCity})} onClick={handleCityClick} to="/">
          <span>{city}</span>
        </a>
      </li>))}
    </ul>
  );
};

export default CityList;
