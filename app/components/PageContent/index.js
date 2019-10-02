/**
 *
 * PageContent
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
});

function PageContent({ children }) {
  const classes = useStyles();
  return <CardContent className={classes.content}>{children}</CardContent>;
}

PageContent.propTypes = {
  children: PropTypes.array,
};

export default memo(PageContent);
