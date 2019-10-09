/**
 *
 * QuestionContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { storeAnswer } from 'containers/AppContainer/actions';
import {
  makeSelectQuestion,
  makeSelectCurrentUser,
} from 'containers/AppContainer/selectors';
import Question from 'components/pages/Question';

export function QuestionContainer(props) {
  return <Question {...props} />;
}

QuestionContainer.propTypes = {
  question: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  saveAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  question: makeSelectQuestion,
  currentUser: makeSelectCurrentUser,
});

function mapDispatchToProps(dispatch) {
  return {
    saveAnswer: answer => dispatch(storeAnswer(answer)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(QuestionContainer);
