/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../LoginContainer';

import Header from '../../components/Header';

export default function App() {
  return (
    <Fragment>
      <Header title="Would you rather?" />

      <Switch>
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Fragment>
  );
}
