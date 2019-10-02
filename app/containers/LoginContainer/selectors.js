import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginContainer state domain
 */

const selectLoginContainerDomain = state =>
  state.loginContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginContainer
 */

const makeSelectUsers = () =>
  createSelector(
    selectLoginContainerDomain,
    state => state.users,
  );

const makeSelectCurrentUser = () =>
  createSelector(
    selectLoginContainerDomain,
    state => state.users[state.currentUser],
  );

export { makeSelectUsers, makeSelectCurrentUser };
