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

import { makeSelectQuestion } from 'containers/AppContainer/selectors';
import Question from 'components/Question';

export function QuestionContainer(props) {
  return <Question {...props} />;
}

QuestionContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  question: makeSelectQuestion(),
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
)(QuestionContainer);
