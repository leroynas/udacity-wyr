/*
 *
 * AppContainer reducer
 *
 */
import produce from 'immer';
import {
  LOAD_USERS_SUCCESS,
  SELECT_USER,
  LOAD_QUESTIONS_SUCCESS,
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
      case SELECT_USER:
        draft.currentUser = action.id;
        break;
      case LOAD_QUESTIONS_SUCCESS:
        draft.questions = action.questions;
        break;
    }
  });

export default appReducer;