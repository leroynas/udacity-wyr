/**
 *
 * PageHeader
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderBottomStyle: 'solid',
  },
});

function PageHeader({ title }) {
  const classes = useStyles();

  return <CardHeader title={title} className={classes.header} />;
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(PageHeader);
