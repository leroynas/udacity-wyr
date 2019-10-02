/**
 *
 * Questions
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Container, Card } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    paddingTop: 30,
  },
});

function Page({ children }) {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Card>{children}</Card>
    </Container>
  );
}

Page.propTypes = {
  children: PropTypes.array,
};

export default memo(Page);
