/**
 *
 * Header
 *
 */

import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import Navigation from '../Navigation';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

function Header({ title, currentUser }) {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>

        <Navigation />

        {currentUser && (
          <Fragment>
            <Button color="inherit">{currentUser.name}</Button>
            <Button color="inherit">Logout</Button>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  currentUser: PropTypes.object,
};

export default memo(Header);
