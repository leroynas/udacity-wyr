/*
 *
 * LoginContainer actions
 *
 */

import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILED,
  SELECT_USER,
} from './constants';

export function loadUsers() {
  return {
    type: LOAD_USERS,
  };
}

export function usersLoaded(users) {
  return {
    type: LOAD_USERS_SUCCESS,
    users,
  };
}

export function usersLoadingError(message) {
  return {
    type: LOAD_USERS_FAILED,
    message,
  };
}

export function selectUser(id) {
  return {
    type: SELECT_USER,
    id,
  };
}
