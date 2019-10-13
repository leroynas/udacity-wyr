import React from 'react';
import PropTypes from 'prop-types';

import Text from 'components/ui/Text';
import Heading from 'components/ui/Heading';

import Container from './Container';

function Score({ score, position }) {
  const colors = {
    0: 'gold',
    1: 'silver',
    2: 'bronze',
  };

  return (
    <Container backgroundColor={colors[position]}>
      <Text spacing="xs">Score</Text>
      <Heading>{score}</Heading>
    </Container>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
};

export default Score;
