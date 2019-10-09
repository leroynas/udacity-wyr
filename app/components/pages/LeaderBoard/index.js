/**
 *
 * LeaderBoard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Page from 'components/ui/Page';
import PageHeader from 'components/ui/PageHeader';
import PageContent from 'components/ui/PageContent';

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
