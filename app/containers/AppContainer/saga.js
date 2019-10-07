import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  _getUsers as fetchUsers,
  _getQuestions as fetchQuestions,
  _formatQuestion as formatQuestion,
  _saveQuestion as saveQuestion,
  _saveQuestionAnswer as saveAnswer,
} from 'core/api';

import {
  LOAD_USERS,
  LOGIN_USER,
  LOAD_QUESTIONS,
  STORE_QUESTION,
  STORE_ANSWER,
} from './constants';
import {
  usersLoaded,
  usersLoadingError,
  questionsLoaded,
  questionsLoadingError,
  questionSaved,
  questionSavingError,
  answerSaved,
  answerSavingError,
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
  yield put(push('/questions/unanswered'));
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
      put(push('/questions/unanswered')),
      call(saveQuestion, formattedQuestion),
    ];
  } catch ({ message }) {
    yield put(questionSavingError(message, question.id));
  }
}

function* storeAnswer({ answer }) {
  try {
    yield* [
      put(answerSaved(answer)),
      put(push(`/question/${answer.qid}/result`)),
      call(saveAnswer, answer),
    ];
  } catch ({ message }) {
    yield put(answerSavingError(message, answer));
  }
}

// Individual exports for testing
export default function* appContainerSaga() {
  yield* [
    takeLatest(LOAD_USERS, loadUsers),
    takeLatest(LOGIN_USER, loginUser),
    takeLatest(LOAD_QUESTIONS, loadQuestions),
    takeLatest(STORE_QUESTION, storeQuestion),
    takeLatest(STORE_ANSWER, storeAnswer),
  ];
}
