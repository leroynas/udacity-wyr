/**
 *
 * Navigation
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Flex from 'components/ui/Flex';
import Icon from 'components/ui/Icon';

import Container from './Container';
import Button from './Button';
import Link from './Link';

function Navigation({ currentUser, logoutUser }) {
  return (
    <Container>
      <Link to="/questions/unanswered">
        <Button>Questions</Button>
      </Link>
      <Link to="/new-question">
        <Button>New question</Button>
      </Link>
      <Link to="/leaderboard">
        <Button>Leaderboard</Button>
      </Link>

      <Button clickable={false}>
        <Flex alignItems="center">
          {currentUser.avatarURL && <Icon src={currentUser.avatarURL} />}
          {currentUser.name}
        </Flex>
      </Button>
      <Button onClick={logoutUser}>Logout</Button>
    </Container>
  );
}

Navigation.propTypes = {
  currentUser: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default memo(Navigation);
