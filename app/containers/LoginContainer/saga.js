import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { _getUsers as fetchUsers } from 'core/api';

import { LOAD_USERS, SELECT_USER } from './constants';
import { usersLoaded, usersLoadingError } from './actions';

function* loadUsers() {
  try {
    const users = yield call(fetchUsers);
    yield put(usersLoaded(users));
  } catch ({ message }) {
    yield put(usersLoadingError(message));
  }
}

function* selectUser() {
  yield put(push('/questions'));
}

// Individual exports for testing
export default function* loginContainerSaga() {
  yield* [
    takeLatest(LOAD_USERS, loadUsers),
    takeLatest(SELECT_USER, selectUser),
  ];
}
