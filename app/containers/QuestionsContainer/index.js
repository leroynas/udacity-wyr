/**
 *
 * QuestionsContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectQuestions } from 'containers/AppContainer/selectors';
import Questions from 'components/Questions';

export function QuestionsContainer(props) {
  return <Questions {...props} />;
}

QuestionsContainer.propTypes = {
  questionsAnswered: PropTypes.object.isRequired,
  questionsUnanswered: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  questionsAnswered: makeSelectQuestions(true),
  questionsUnanswered: makeSelectQuestions(false),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(QuestionsContainer);
