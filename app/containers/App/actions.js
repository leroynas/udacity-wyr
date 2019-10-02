/*
 *
 * AppContainer actions
 *
 */

import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILED,
  SELECT_USER,
  LOAD_QUESTIONS,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_FAILED,
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

export function loadQuestions() {
  return {
    type: LOAD_QUESTIONS,
  };
}

export function questionsLoaded(questions) {
  return {
    type: LOAD_QUESTIONS_SUCCESS,
    questions,
  };
}

export function questionsLoadingError(message) {
  return {
    type: LOAD_QUESTIONS_FAILED,
    message,
  };
}
