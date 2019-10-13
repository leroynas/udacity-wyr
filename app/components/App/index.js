/**
 *
 * App
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Switch, Route } from 'react-router-dom';

import routes from 'core/routes';
import Header from 'components/ui/Header';

import Wrapper from './Wrapper';
import Main from './Main';
import ProtectedRoute from './ProtectedRoute';

function App({ currentUser, logoutUser }) {
  return (
    <Wrapper>
      <Header
        title="Would You Rather"
        currentUser={currentUser}
        logoutUser={logoutUser}
      />

      <Main>
        <Switch>
          {routes.public.map(route => (
            <Route key={route.path} exact {...route} />
          ))}

          {routes.protected.map(route => (
            <ProtectedRoute
              key={route.path}
              currentUser={currentUser}
              {...route}
            />
          ))}

          <Redirect to={routes.default} />
        </Switch>
      </Main>
    </Wrapper>
  );
}

App.propTypes = {
  currentUser: PropTypes.object,
  logoutUser: PropTypes.func.isRequired,
};

export default memo(App);
