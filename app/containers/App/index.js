/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectUsers,
  makeSelectCurrentUser,
  makeSelectQuestions,
} from 'containers/App/selectors';
import { loadUsers, loadQuestions } from 'containers/App/actions';
import Header from 'components/Header';

import reducer from './reducer';
import saga from './saga';

import LoginContainer from '../LoginContainer/Loadable';
import QuestionsContainer from '../QuestionsContainer/Loadable';
import QuestionContainer from '../QuestionContainer/Loadable';

const key = 'app';

function App({ users, currentUser, questions, getUsers, getQuestions }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (Object.entries(users).length === 0) getUsers();
    if (Object.entries(questions).length === 0) getQuestions();
  }, []);

  return (
    <Fragment>
      <Header title="Would you rather?" currentUser={currentUser} />

      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route path="/questions" component={QuestionsContainer} />
        <Route path="/question/:id" component={QuestionContainer} />
      </Switch>
    </Fragment>
  );
}

App.propTypes = {
  users: PropTypes.object.isRequired,
  questions: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  getUsers: PropTypes.func.isRequired,
  getQuestions: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  currentUser: makeSelectCurrentUser(),
  questions: makeSelectQuestions(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(loadUsers()),
    getQuestions: () => dispatch(loadQuestions()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
