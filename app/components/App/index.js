/**
 *
 * App
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

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
          {routes.protected.map(route => (
            <ProtectedRoute
              key={route.path}
              currentUser={currentUser}
              {...route}
            />
          ))}

          {routes.public.map(route => (
            <Route key={route.path} exact {...route} />
          ))}
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
