/*
 *
 * LoginContainer reducer
 *
 */
import produce from 'immer';
import { LOAD_USERS_SUCCESS, SELECT_USER } from './constants';

export const initialState = {
  users: {},
  currentUser: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_USERS_SUCCESS:
        draft.users = action.users;
        break;
      case SELECT_USER:
        draft.currentUser = action.id;
        break;
    }
  });

export default loginReducer;
