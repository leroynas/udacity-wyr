/**
 *
 * App
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { compose } from 'redux';

import routes from 'core/routes';
import Header from 'components/ui/Header';

import Wrapper from './Wrapper';
import Main from './Main';
import ProtectedRoute from './ProtectedRoute';

function App({ currentUser, logoutUser, location }) {
  return (
    <Wrapper>
      <Header
        title="Would You Rather"
        currentUser={currentUser}
        logoutUser={logoutUser}
      />

      <Main>
        <Switch>
          <Redirect exact path="/" to={routes.default} />

          {routes.protected.map(route => (
            <ProtectedRoute
              key={route.path}
              currentUser={currentUser}
              referrer={location.pathname}
              {...route}
            />
          ))}

          {routes.public.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Main>
    </Wrapper>
  );
}

App.propTypes = {
  currentUser: PropTypes.object,
  logoutUser: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  memo,
)(App);
