import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  _getUsers as fetchUsers,
  _getQuestions as fetchQuestions,
  _saveQuestion as saveQuestion,
} from 'core/api';

import {
  LOAD_USERS,
  SELECT_USER,
  LOAD_QUESTIONS,
  STORE_QUESTION,
} from './constants';
import {
  usersLoaded,
  usersLoadingError,
  questionsLoaded,
  questionsLoadingError,
  questionSaved,
  questionSavingError,
} from './actions';

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

function* loadQuestions() {
  try {
    const users = yield call(fetchQuestions);
    yield put(questionsLoaded(users));
  } catch ({ message }) {
    yield put(questionsLoadingError(message));
  }
}

function* storeQuestion({ question }) {
  try {
    const result = yield call(saveQuestion, question);
    yield put(questionSaved(result));
  } catch ({ message }) {
    yield put(questionSavingError(message));
  }
}

// Individual exports for testing
export default function* loginContainerSaga() {
  yield* [
    takeLatest(LOAD_USERS, loadUsers),
    takeLatest(SELECT_USER, selectUser),
    takeLatest(LOAD_QUESTIONS, loadQuestions),
    takeLatest(STORE_QUESTION, storeQuestion),
  ];
}
