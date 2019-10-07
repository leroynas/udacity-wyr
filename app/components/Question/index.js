/**
 *
 * Question
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

import Page from 'components/Page';
import PageHeader from 'components/PageHeader';
import PageContent from 'components/PageContent';
import CardAvatar from 'components/CardAvatar';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    marginBottom: 10,
  },
  button: {
    flexGrow: 1,
    marginTop: 15,
  },
});

function Question({ question, currentUser, saveAnswer }) {
  const classes = useStyles();
  const [answer, setAnswer] = useState('');

  const handleSaveAnswer = () =>
    answer !== '' &&
    saveAnswer({
      qid: question.id,
      uid: currentUser.id,
      answer,
    });

  return (
    <Page>
      <PageHeader title={`${question.authorName} asks:`} />

      <PageContent className={classes.container}>
        <CardAvatar />

        <div className={classes.content}>
          <Typography variant="h6" className={classes.title}>
            Would you rather...
          </Typography>

          <RadioGroup
            aria-label="option"
            name="option"
            value={answer}
            onChange={event => {
              setAnswer(event.target.value);
            }}
          >
            <FormControlLabel
              value="optionOne"
              control={<Radio />}
              label={question.optionOne.text}
            />
            <FormControlLabel
              value="optionTwo"
              control={<Radio />}
              label={question.optionTwo.text}
            />
          </RadioGroup>

          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={handleSaveAnswer}
            disabled={answer === ''}
          >
            Submit answer
          </Button>
        </div>
      </PageContent>
    </Page>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  saveAnswer: PropTypes.func.isRequired,
};

export default memo(Question);
