import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
        <h1 style={{fontSize: `40px`}}>404. Page Not Found</h1>
        <section className="locations locations--login locations--current">
          <Link className="locations__item-link" style={{fontSize: `40px`}} to="/">
            <span>Return to main page</span>
          </Link>
        </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
