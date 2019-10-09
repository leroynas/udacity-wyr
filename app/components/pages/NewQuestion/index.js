/**
 *
 * NewQuestion
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { FormControl, Typography, TextField, Button } from '@material-ui/core';

import Page from 'components/ui/Page';
import PageHeader from 'components/ui/PageHeader';
import PageContent from 'components/ui/PageContent';

const useStyles = makeStyles({
  or: {
    textAlign: 'center',
  },
});

function NewQuestion({ saveQuestion, currentUser }) {
  const classes = useStyles();

  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');

  const handleSaveQuestion = () =>
    saveQuestion({
      optionOneText,
      optionTwoText,
      author: currentUser.id,
    });

  return (
    <Page>
      <PageHeader title="Create New Question" />
      <PageContent>
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
      </PageContent>
    </Page>
  );
}

NewQuestion.propTypes = {
  saveQuestion: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default memo(NewQuestion);
