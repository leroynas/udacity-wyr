/**
 *
 * Navigation
 *
 */

import React, { memo, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

function Navigation() {
  const classes = useStyles();

  return (
    <Fragment>
      <Link to="/questions" className={classes.link}>
        <Button color="inherit">Questions</Button>
      </Link>

      <Link to="/new-question" className={classes.link}>
        <Button color="inherit">New question</Button>
      </Link>

      <Button color="inherit">Logout</Button>
    </Fragment>
  );
}

export default memo(Navigation);
