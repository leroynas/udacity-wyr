/**
 *
 * LeaderBoardContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLeaderBoard } from 'containers/AppContainer/selectors';
import LeaderBoard from 'components/LeaderBoard';

export function LeaderBoardContainer(props) {
  return <LeaderBoard {...props} />;
}

LeaderBoardContainer.propTypes = {
  leaderBoard: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  leaderBoard: makeSelectLeaderBoard,
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(LeaderBoardContainer);
