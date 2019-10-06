/**
 *
 * QuestionResult
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectQuestion,
  makeSelectCurrentUser,
} from 'containers/AppContainer/selectors';
import QuestionResult from 'components/QuestionResult';

export function QuestionResultContainer(props) {
  return <QuestionResult {...props} />;
}

QuestionResultContainer.propTypes = {
  question: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  question: makeSelectQuestion(),
  currentUser: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(QuestionResultContainer);
