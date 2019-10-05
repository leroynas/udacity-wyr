/**
 *
 * CardAvatar
 *
 */

import React, { memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
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
