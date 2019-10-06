/*
 *
 * AppContainer actions
 *
 */

import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILED,
  LOGIN_USER,
  LOGOUT_USER,
  LOAD_QUESTIONS,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_FAILED,
  STORE_QUESTION,
  STORE_QUESTION_SUCCESS,
  STORE_QUESTION_FAILED,
  STORE_ANSWER,
  STORE_ANSWER_SUCCESS,
  STORE_ANSWER_FAILED,
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

export function loginUser(id) {
  return {
    type: LOGIN_USER,
    id,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
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

export function storeQuestion(question) {
  return {
    type: STORE_QUESTION,
    question,
  };
}

export function questionSaved(question) {
  return {
    type: STORE_QUESTION_SUCCESS,
    question,
  };
}

export function questionSavingError(message, question) {
  return {
    type: STORE_QUESTION_FAILED,
    message,
    question,
  };
}

export function storeAnswer(answer) {
  return {
    type: STORE_ANSWER,
    answer,
  };
}

export function answerSaved(answer) {
  return {
    type: STORE_ANSWER_SUCCESS,
    answer,
  };
}

export function answerSavingError(message, answer) {
  return {
    type: STORE_ANSWER_FAILED,
    message,
    answer,
  };
}
