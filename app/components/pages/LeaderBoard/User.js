/**
 *
 * User
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Flex from 'components/ui/Flex';
import Avatar from 'components/ui/Avatar';
import Heading from 'components/ui/Heading';
import Text from 'components/ui/Text';

import Score from './Score';

function User({ user, position }) {
  const { name, totalQuestions, totalAnswers, total } = user;

  return (
    <Flex alignItems="center" spacing="xl">
      <Avatar src={user.avatarURL} />

      <Flex direction="column">
        <Heading size="xl" spacing="sm">
          {name}
        </Heading>

        <Text spacing="xs">{`Total questions: ${totalQuestions}`}</Text>
        <Text spacing="xs">{`Total answers: ${totalAnswers}`}</Text>
      </Flex>

      <Score score={total} position={position} />
    </Flex>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  position: PropTypes.number.isRequired,
};

export default memo(User);
