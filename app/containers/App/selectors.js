import { createSelector } from 'reselect';

/**
 * Specific selectors
 */

const selectUsers = state => (state.app ? state.app.users : {});
const selectCurrentUser = state => (state.app ? state.app.currentUser : null);
const selectQuestions = state => (state.app ? state.app.questions : {});

/**
 * Default selector used by AppContainer
 */

const makeSelectUsers = () =>
  createSelector(
    selectUsers,
    users => users,
  );

const makeSelectCurrentUser = () =>
  createSelector(
    selectUsers,
    selectCurrentUser,
    (users, currentUser) => users[currentUser],
  );

const makeSelectQuestions = () =>
  createSelector(
    selectUsers,
    selectQuestions,
    (users, questions) =>
      Object.values(questions).reduce(
        (acc, question) => ({
          ...acc,
          [question.id]: {
            ...question,
            authorName: users[question.author].name,
          },
        }),
        {},
      ),
  );

export { makeSelectUsers, makeSelectCurrentUser, makeSelectQuestions };
