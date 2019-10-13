/**
 *
 * Question
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Flex from 'components/ui/Flex';
import Avatar from 'components/ui/Avatar';
import Heading from 'components/ui/Heading';
import Text from 'components/ui/Text';

function Question({ question, history, type }) {
  const { id, authorName, optionOne } = question;

  const link =
    type === 'unanswered' ? `/question/${id}` : `/question/${id}/result`;

  const goToQuestion = () => history.push(link);

  return (
    <Flex
      onClick={goToQuestion}
      alignItems="center"
      spacing="xl"
      cursor="pointer"
    >
      <Avatar src={question.authorAvatarURL} />

      <Flex direction="column">
        <Heading size="xl" spacing="sm">{`${authorName} asks:`}</Heading>
        <Text spacing="xs">Would you rather...</Text>
        <Text spacing="xs">{optionOne.text}...</Text>
      </Flex>
    </Flex>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default memo(Question);
