/**
 *
 * NewQuestionContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import { storeQuestion } from 'containers/App/actions';
import NewQuestion from 'components/NewQuestion';

export function NewQuestionContainer(props) {
  return <NewQuestion {...props} />;
}

NewQuestionContainer.propTypes = {
  currentUser: PropTypes.object.isRequired,
  saveQuestion: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    saveQuestion: question => dispatch(storeQuestion(question)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(NewQuestionContainer);
