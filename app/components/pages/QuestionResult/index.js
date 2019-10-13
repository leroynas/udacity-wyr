/**
 *
 * QuestionResult
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Container from 'components/ui/Container';
import Title from 'components/ui/Title';
import Page from 'components/ui/Page';
import Flex from 'components/ui/Flex';
import Avatar from 'components/ui/Avatar';
import Heading from 'components/ui/Heading';

import Option from './Option';

function QuestionResult({ question, currentUser }) {
  const { authorName, optionOne, optionTwo } = question;

  if (!{}.hasOwnProperty.call(currentUser.answers, question.id)) {
    return <Redirect to={`/question/${question.id}`} />;
  }

  const totalVotes = optionOne.votes.length + optionTwo.votes.length;

  return (
    <Container>
      <Title>{`Asked by ${authorName}`}</Title>

      <Page>
        <Flex alignItems="center">
          <Avatar src={currentUser.avatarURL} />

          <Flex direction="column">
            <Heading size="xl" spacing="sm">
              Result
            </Heading>

            <Option
              option={optionOne}
              totalVotes={totalVotes}
              currentUserID={currentUser.id}
            />

            <Option
              option={optionTwo}
              totalVotes={totalVotes}
              currentUserID={currentUser.id}
            />
          </Flex>
        </Flex>
      </Page>
    </Container>
  );
}

QuestionResult.propTypes = {
  question: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default memo(QuestionResult);
