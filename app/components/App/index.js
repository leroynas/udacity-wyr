/**
 *
 * App
 *
 */

import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';

import ProtectedRoute from './ProtectedRoute';
import routes from './routes';

function App({ currentUser }) {
  return (
    <Fragment>
      <Header title="Would you rather?" currentUser={currentUser} />

      <Switch>
        {routes.public.map(route => (
          <Route key={route.path} {...route} />
        ))}

        {routes.protected.map(route => (
          <ProtectedRoute
            key={route.path}
            currentUser={currentUser}
            {...route}
          />
        ))}
      </Switch>
    </Fragment>
  );
}

App.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default memo(App);