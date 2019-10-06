/*
 *
 * AppContainer reducer
 *
 */
import produce from 'immer';
import {
  LOAD_USERS_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER,
  LOAD_QUESTIONS_SUCCESS,
  STORE_QUESTION_SUCCESS,
  STORE_QUESTION_FAILED,
  STORE_ANSWER_SUCCESS,
  STORE_ANSWER_FAILED,
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
      case LOGOUT_USER:
        draft.currentUser = null;
        break;
      case LOAD_QUESTIONS_SUCCESS:
        draft.questions = action.questions;
        break;
      case STORE_QUESTION_SUCCESS:
        draft.questions[action.question.id] = action.question;
        draft.users[action.question.author].questions.push(action.question.id);
        break;
      case STORE_QUESTION_FAILED:
        delete draft.questions[action.question.id];
        draft.users[action.question.author].questions.pop();
        break;
      case STORE_ANSWER_SUCCESS:
        draft.questions[action.answer.qid][action.answer.answer].votes.push(
          action.answer.uid,
        );
        draft.users[action.answer.uid].answers[action.answer.qid] =
          action.answer.answer;
        break;
      case STORE_ANSWER_FAILED:
        draft.questions[action.qid][action.answer].votes.pop();
        delete draft.users[action.uid].answers[action.qid];
        break;
    }
  });

export default appReducer;
