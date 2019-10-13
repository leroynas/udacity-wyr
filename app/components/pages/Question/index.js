/**
 *
 * Question
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Container from 'components/ui/Container';
import Title from 'components/ui/Title';
import Page from 'components/ui/Page';
import Avatar from 'components/ui/Avatar';
import Flex from 'components/ui/Flex';
import Heading from 'components/ui/Heading';
import FormGroup from 'components/ui/FormGroup';
import RadioInput from 'components/ui/RadioInput';
import Button from 'components/ui/Button';

function Question({ question, currentUser, saveAnswer }) {
  const [answer, setAnswer] = useState('');

  const handleSaveAnswer = () =>
    answer !== '' &&
    saveAnswer({
      qid: question.id,
      uid: currentUser.id,
      answer,
    });

  if ({}.hasOwnProperty.call(currentUser.answers, question.id)) {
    return <Redirect to={`/question/${question.id}/result`} />;
  }

  const options = [
    { title: question.optionOne.text, value: 'optionOne' },
    { title: question.optionTwo.text, value: 'optionTwo' },
  ];

  return (
    <Container>
      <Title>{`${question.authorName} asks`}</Title>

      <Page>
        <Flex alignItems="column" spacing="lg">
          <Avatar src={question.authorAvatarURL} />

          <Flex direction="column">
            <Heading size="xl" spacing="md">
              Would you rather...
            </Heading>

            <FormGroup>
              <RadioInput
                options={options}
                value={answer}
                onChange={setAnswer}
              />
            </FormGroup>
          </Flex>
        </Flex>

        <Button onClick={handleSaveAnswer}>Submit Vote</Button>
      </Page>
    </Container>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  saveAnswer: PropTypes.func.isRequired,
};

export default memo(Question);
