/**
 *
 * CardAvatar
 *
 */

import React, { memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
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

function CardAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.avatarWrapper}>
      <Avatar src="http://via.placeholder.com/100" className={classes.avatar} />
    </div>
  );
}

export default memo(CardAvatar);
