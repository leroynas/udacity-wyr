/**
 *
 * CardAvatar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
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
    width: 140,
    height: 140,
  },
});

function CardAvatar({ url }) {
  const classes = useStyles();

  return (
    <div className={classes.avatarWrapper}>
      <Avatar src={url} className={classes.avatar} />
    </div>
  );
}

CardAvatar.propTypes = {
  url: PropTypes.string.isRequired,
};

export default memo(CardAvatar);
