/**
 *
 * NewQuestion
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import Container from 'components/ui/Container';
import Title from 'components/ui/Title';
import Page from 'components/ui/Page';
import Heading from 'components/ui/Heading';
import FormGroup from 'components/ui/FormGroup';
import TextInput from 'components/ui/TextInput';
import Flex from 'components/ui/Flex';
import Text from 'components/ui/Text';
import Button from 'components/ui/Button';

function NewQuestion({ saveQuestion, currentUser }) {
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');

  const handleSaveQuestion = () =>
    saveQuestion({
      optionOneText,
      optionTwoText,
      author: currentUser.id,
    });

  return (
    <Container>
      <Title>Create New Question</Title>

      <Page>
        <Heading size="xl" spacing="lg">
          Would you rather
        </Heading>

        <FormGroup spacing="md">
          <TextInput
            value={optionOneText}
            onChange={e => setOptionOneText(e.target.value)}
          />
        </FormGroup>

        <Flex justifyContent="center" spacing="md">
          <Text>or</Text>
        </Flex>

        <FormGroup>
          <TextInput
            value={optionTwoText}
            onChange={e => setOptionTwoText(e.target.value)}
          />
        </FormGroup>

        <Button onClick={handleSaveQuestion}>Save New Question</Button>
        {/* <PageContent>
          <FormControl variant="filled">
            <Typography variant="h5">Would you rather...</Typography>

            <TextField
              label="Option one"
              margin="normal"
              variant="outlined"
              value={optionOneText}
              onChange={event => {
                setOptionOneText(event.target.value);
              }}
            />

            <Typography variant="h6" className={classes.or}>
              or
            </Typography>

            <TextField
              label="Option two"
              margin="normal"
              variant="outlined"
              value={optionTwoText}
              onChange={event => {
                setOptionTwoText(event.target.value);
              }}
            />

            <Button
              variant="outlined"
              color="primary"
              onClick={handleSaveQuestion}
            >
              Save Question
            </Button>
          </FormControl>
        </PageContent> */}
      </Page>
    </Container>
  );
}

NewQuestion.propTypes = {
  saveQuestion: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default memo(NewQuestion);
