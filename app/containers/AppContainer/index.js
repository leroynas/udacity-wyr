/**
 *
 * AppContainer
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectUsers,
  makeSelectCurrentUser,
  makeSelectQuestions,
} from 'containers/AppContainer/selectors';
import {
  loadUsers,
  loadQuestions,
  logoutUser,
} from 'containers/AppContainer/actions';
import App from 'components/App';

import reducer from './reducer';
import saga from './saga';

const key = 'app';

function AppContainer(props) {
  const { users, questions, getUsers, getQuestions } = props;

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (Object.entries(users).length === 0) getUsers();
    if (Object.entries(questions).length === 0) getQuestions();
  }, []);

  return <App {...props} />;
}

AppContainer.propTypes = {
  users: PropTypes.object.isRequired,
  questions: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  getUsers: PropTypes.func.isRequired,
  getQuestions: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
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
    logoutUser: () => dispatch(logoutUser()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AppContainer);
