/**
 *
 * Question
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    marginBottom: 20,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderBottomStyle: 'solid',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    borderRightStyle: 'solid',
  },
  avatar: {
    marginRight: 20,
    width: 100,
    height: 100,
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

function Question({ question, history }) {
  const classes = useStyles();
  const { id, authorName, optionOne } = question;

  const goToQuestion = () => history.push(`/question/${id}`);

  return (
    <Card className={classes.card}>
      <CardHeader title={`${authorName} asks:`} className={classes.header} />

      <CardContent className={classes.container}>
        <div className={classes.avatarWrapper}>
          <Avatar
            src="http://via.placeholder.com/100"
            className={classes.avatar}
          />
        </div>

        <div className={classes.content}>
          <Typography variant="h6" className={classes.title}>
            Would you rather...
          </Typography>
          <Typography variant="body1">{optionOne.text} or ...</Typography>

          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={goToQuestion}
          >
            View Poll
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default memo(Question);
