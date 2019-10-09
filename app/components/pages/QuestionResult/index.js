/**
 *
 * QuestionResult
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import Page from 'components/ui/Page';
import PageHeader from 'components/ui/PageHeader';
import PageContent from 'components/ui/PageContent';
import CardAvatar from 'components/ui/CardAvatar';
import Option from './Option';

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

function QuestionResult({ question, currentUser }) {
  const classes = useStyles();

  const { authorName, optionOne, optionTwo } = question;

  return (
    <Page>
      <PageHeader title={`Asked by ${authorName}`} />

      <PageContent className={classes.container}>
        <CardAvatar url={question.authorAvatarURL} />

        <div className={classes.content}>
          <Typography variant="h6" className={classes.title}>
            Results:
          </Typography>

          <Option
            option={optionOne}
            otherOption={optionTwo}
            currentUserId={currentUser.id}
          />
          <Option
            option={optionTwo}
            otherOption={optionOne}
            currentUserId={currentUser.id}
          />
        </div>
      </PageContent>
    </Page>
  );
}

QuestionResult.propTypes = {
  question: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default memo(QuestionResult);
