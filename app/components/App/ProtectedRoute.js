import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({
  component: Component,
  currentUser,
  referrer,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        currentUser !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', referrer }} />
        )
      }
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
  referrer: PropTypes.string.isRequired,
};

export default ProtectedRoute;
