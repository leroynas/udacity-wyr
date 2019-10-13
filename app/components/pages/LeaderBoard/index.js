/**
 *
 * LeaderBoard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Container from 'components/ui/Container';
import Title from 'components/ui/Title';
import Page from 'components/ui/Page';

import User from './User';

function LeaderBoard({ leaderBoard }) {
  return (
    <Container>
      <Title>Leaderboard</Title>

      <Page>
        {leaderBoard.map((user, position) => (
          <User key={user.id} user={user} position={position} />
        ))}
      </Page>
    </Container>
  );
}

LeaderBoard.propTypes = {
  leaderBoard: PropTypes.array.isRequired,
};

export default memo(LeaderBoard);
