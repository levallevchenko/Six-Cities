import React from 'react';
import {Link} from 'react-router-dom';
import {Header} from '../header/header';

const NotFound = () => {

  return (
    <div className="page page--gray page--login">
      <Header />
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
};

export default NotFound;
