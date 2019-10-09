/**
 *
 * App
 *
 */

import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Switch, Route } from 'react-router-dom';

import routes from 'core/routes';
import Header from 'components/ui/Header';

import ProtectedRoute from './ProtectedRoute';

function App({ currentUser, logoutUser }) {
  return (
    <Fragment>
      <Header
        title="Would you rather?"
        currentUser={currentUser}
        logoutUser={logoutUser}
      />

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
    </Fragment>
  );
}

App.propTypes = {
  currentUser: PropTypes.object,
  logoutUser: PropTypes.func.isRequired,
};

export default memo(App);
