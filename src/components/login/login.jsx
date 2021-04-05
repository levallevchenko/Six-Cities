import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import classNames from 'classnames';
import {ActionCreator} from "../../store/action";
import {REG} from '../../const';
import Header from '../header/header';
import {login} from "../../store/api-actions";

const Login = () => {
  const {isCorrectValue} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  const handleInputChange = () => {
    const loginInputElement = loginRef.current;
    const loginValue = loginInputElement.value;
    const isCorrect = loginValue && REG.test(loginValue);
    dispatch(ActionCreator.checkLogin(isCorrect));
  };

  const submitButtonText = isCorrectValue ? `Sign in` : `Please, enter correct login`;

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              onSubmit={handleSubmit}
              className="login__form form"
              action="">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  onChange={handleInputChange}
                  ref={loginRef}
                  className={classNames(`login__input form__input`, {'login__input--error': !isCorrectValue})}
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  data-testid="login"
                  required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  data-testid="password"
                  required />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit">
                {submitButtonText}
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>Paris</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
