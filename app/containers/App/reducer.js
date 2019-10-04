/*
 *
 * AppContainer reducer
 *
 */
import produce from 'immer';
import {
  LOAD_USERS_SUCCESS,
  LOGIN_USER,
  LOAD_QUESTIONS_SUCCESS,
  STORE_QUESTION_SUCCESS,
} from './constants';

export const initialState = {
  users: {},
  questions: {},
  currentUser: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_USERS_SUCCESS:
        draft.users = action.users;
        break;
      case LOGIN_USER:
        draft.currentUser = action.id;
        break;
      case LOAD_QUESTIONS_SUCCESS:
        draft.questions = action.questions;
        break;
      case STORE_QUESTION_SUCCESS:
        draft.questions[action.question.id] = action.question;
        break;
    }
  });

export default appReducer;
