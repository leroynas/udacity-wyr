/**
 *
 * Question
 *
 */

import React, { memo } from 'react';
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

function Question({ question }) {
  const classes = useStyles();

  if (!question) return null;
  const { authorName, optionOne, optionTwo } = question;

  return (
    <Page>
      <PageHeader title={`${authorName} asks:`} />

      <PageContent className={classes.container}>
        <CardAvatar />

        <div className={classes.content}>
          <Typography variant="h6" className={classes.title}>
            Would you rather...
          </Typography>

          <RadioGroup aria-label="option" name="option">
            <FormControlLabel
              value="optionOne"
              control={<Radio />}
              label={optionOne.text}
            />
            <FormControlLabel
              value="optionTwo"
              control={<Radio />}
              label={optionTwo.text}
            />
          </RadioGroup>

          <Button variant="outlined" color="primary" className={classes.button}>
            Submit answer
          </Button>
        </div>
      </PageContent>
    </Page>
  );
}

Question.propTypes = {
  question: PropTypes.object,
};

export default memo(Question);
