import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth, googleAuthProvider } from '../constants/firebase';

import { Context } from '../index';

const Nav = props => {
  return (
    <nav className="bt bb tc mw7 center mt4">
      <Link
        className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
        to="/"
      >
        Home
      </Link>

      <Link
        className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
        to="/project/about"
      >
        About
      </Link>

      <Link
        className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        to="/project/contact"
      >
        Contact
      </Link>

      <Context.Consumer>
        {context =>
          context.state.user && (
            <Link
              className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
              to="/dashboard"
            >
              Dashboard
            </Link>
          )
        }
      </Context.Consumer>
      <Context.Consumer>
        {context => <AuthButton loggedIn={context.state.user} />}
      </Context.Consumer>
    </nav>
  );
};

export default Nav;

const AuthButton = withRouter(({ loggedIn, history }) => {
  return loggedIn ? (
    <button
      className="bn pointer f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
      onClick={() => auth.signOut()}
    >
      Logout
    </button>
  ) : (
    <button
      className="bn pointer f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
      onClick={() =>
        auth
          .signInWithPopup(googleAuthProvider)
          .then(() => history.push('/dashboard'))
      }
    >
      Login
    </button>
  );
});
