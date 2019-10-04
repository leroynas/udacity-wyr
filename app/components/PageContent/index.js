/**
 *
 * PageContent
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
});

function PageContent({ children, className }) {
  const classes = useStyles();

  return (
    <CardContent className={classNames([classes.content, className])}>
      {children}
    </CardContent>
  );
}

PageContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default memo(PageContent);
