import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Header} from '../header/header';
import {login} from "../../store/api-actions";


const Login = ({onSubmit}) => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

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
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
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
                  required />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit">
                  Sign in
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

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export {Login};
export default connect(null, mapDispatchToProps)(Login);
