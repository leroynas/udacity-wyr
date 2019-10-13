import React from 'react';
import PropTypes from 'prop-types';

import Text from 'components/ui/Text';
import StatusBar from 'components/ui/StatusBar';

import Container from './Container';
import Badge from './Badge';
import ColoredBackground from './ColoredBackground';

function Option({ option, totalVotes, currentUserID }) {
  const highlighted = option.votes.includes(currentUserID);

  const percentage = (100 / totalVotes) * option.votes.length;

  return (
    <Container highlighted={highlighted}>
      <Text>{option.text}</Text>

      <StatusBar percentage={percentage} />

      <Text size="xs">
        {`${option.votes.length} out of ${totalVotes} votes`}
      </Text>

      {highlighted && (
        <>
          <Badge>My vote</Badge>
          <ColoredBackground />
        </>
      )}
    </Container>
  );
}

Option.propTypes = {
  option: PropTypes.object.isRequired,
  totalVotes: PropTypes.number.isRequired,
  currentUserID: PropTypes.string.isRequired,
};

export default Option;
