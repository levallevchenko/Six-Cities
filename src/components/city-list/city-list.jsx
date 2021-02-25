import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ActionCreator} from '../../store/action';
import {CityNames} from '../../const';

const CityList = (props) => {
  const {activeCity, onChangeCity} = props;

  const handleCityClick = (evt) => {
    evt.preventDefault();
    onChangeCity(evt.target.innerText);
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.values(CityNames).map((city, id) => (<li className="locations__item" key={city + id}>
        <a className={classNames(`locations__item-link tabs__item`, {'tabs__item--active': city === activeCity})} onClick={handleCityClick} to="/">
          <span>{city}</span>
        </a>
      </li>))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

CityList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired
};

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
