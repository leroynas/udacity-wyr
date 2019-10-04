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
import Questions from 'components/Questions/Loadable';

export function QuestionsContainer(props) {
  return <Questions {...props} />;
}

QuestionsContainer.propTypes = {
  questions: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  questions: makeSelectQuestions(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(QuestionsContainer);
