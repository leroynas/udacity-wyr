import { createSelector } from 'reselect';

/**
 * Specific selectors
 */

const selectUsers = state => (state.app ? state.app.users : {});
const selectCurrentUser = state => (state.app ? state.app.currentUser : null);
const selectQuestions = state => (state.app ? state.app.questions : {});
const selectQuestionId = (state, ownProps) => ownProps.match.params.id;

/**
 * Default selector used by AppContainer
 */

const makeSelectUsers = createSelector(
  selectUsers,
  users => users,
);

const makeSelectCurrentUser = createSelector(
  selectUsers,
  selectCurrentUser,
  (users, currentUser) => currentUser && users && users[currentUser],
);

const makeSelectQuestions = (answered = null) =>
  createSelector(
    makeSelectCurrentUser,
    selectUsers,
    selectQuestions,
    (currentUser, users, questions) =>
      Object.values(questions)
        .filter(question =>
          currentUser === null
            ? answered !== null && !answered
            : answered !== null &&
              Object.prototype.hasOwnProperty.call(
                currentUser.answers,
                question.id,
              ) === answered,
        )
        .sort((a, b) => b.timestamp - a.timestamp)
        .reduce(
          (acc, question) => ({
            ...acc,
            [question.id]: {
              ...question,
              authorName: users[question.author].name,
              authorAvatarURL: users[question.author].avatarURL,
            },
          }),
          {},
        ),
  );

const makeSelectQuestion = createSelector(
  selectUsers,
  selectQuestions,
  selectQuestionId,
  (users, questions, id) =>
    questions[id] && {
      ...questions[id],
      authorName: users[questions[id].author].name,
      authorAvatarURL: users[questions[id].author].avatarURL,
    },
);

const makeSelectLeaderBoard = createSelector(
  makeSelectUsers,
  users =>
    Object.values(users)
      .map(user => {
        const totalAnswers = Object.keys(user.answers).length;
        const totalQuestions = Object.keys(user.questions).length;
        const total = totalAnswers + totalQuestions;

        return {
          ...user,
          totalAnswers,
          totalQuestions,
          total,
        };
      })
      .sort(
        (a, b) =>
          b.totalAnswers +
          b.totalQuestions -
          (a.totalAnswers + a.totalQuestions),
      ),
);

export {
  makeSelectUsers,
  makeSelectCurrentUser,
  makeSelectQuestions,
  makeSelectQuestion,
  makeSelectLeaderBoard,
};
