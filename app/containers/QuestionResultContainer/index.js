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
import QuestionResult from 'components/pages/QuestionResult';
import NotFound from 'components/pages/NotFound';

export function QuestionResultContainer(props) {
  if (typeof props.question === 'undefined') {
    return <NotFound />;
  }

  return <QuestionResult {...props} />;
}

QuestionResultContainer.propTypes = {
  question: PropTypes.object,
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  question: makeSelectQuestion,
  currentUser: makeSelectCurrentUser,
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
