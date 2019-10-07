/**
 *
 * LeaderBoard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Page from 'components/Page';
import PageHeader from 'components/PageHeader';
import PageContent from 'components/PageContent';

import User from './User';

function LeaderBoard({ leaderBoard }) {
  return (
    <Page>
      <PageHeader title="Leaderboard" />

      <PageContent>
        {leaderBoard.map(user => (
          <User key={user.id} user={user} />
        ))}
      </PageContent>
    </Page>
  );
}

LeaderBoard.propTypes = {
  leaderBoard: PropTypes.array.isRequired,
};

export default memo(LeaderBoard);
