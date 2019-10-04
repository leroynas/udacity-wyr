import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  _getUsers as fetchUsers,
  _getQuestions as fetchQuestions,
  _saveQuestion as saveQuestion,
  _formatQuestion as formatQuestion,
} from 'core/api';

import {
  LOAD_USERS,
  LOGIN_USER,
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

function* loginUser() {
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
    const formattedQuestion = formatQuestion(question);

    yield* [
      put(questionSaved(formattedQuestion)),
      put(push('/questions')),
      call(saveQuestion, formattedQuestion),
    ];
  } catch ({ message }) {
    yield put(questionSavingError(message, question.id));
  }
}

// Individual exports for testing
export default function* appContainerSaga() {
  yield* [
    takeLatest(LOAD_USERS, loadUsers),
    takeLatest(LOGIN_USER, loginUser),
    takeLatest(LOAD_QUESTIONS, loadQuestions),
    takeLatest(STORE_QUESTION, storeQuestion),
  ];
}
