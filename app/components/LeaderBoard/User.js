/**
 *
 * User
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

import CardAvatar from 'components/CardAvatar';

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
});

function User({ user }) {
  const classes = useStyles();
  const { name, totalQuestions, totalAnswers, total } = user;

  return (
    <Card className={classes.card}>
      <CardHeader title={name} className={classes.header} />

      <CardContent className={classes.container}>
        <CardAvatar url={user.avatarURL} />

        <div className={classes.content}>
          <Typography variant="h6" className={classes.title}>
            {`Total questions: ${totalQuestions}`}
          </Typography>

          <Typography variant="h6" className={classes.title}>
            {`Total answers: ${totalAnswers}`}
          </Typography>

          <Typography variant="h6" className={classes.title}>
            {`Score: ${total}`}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default memo(User);
