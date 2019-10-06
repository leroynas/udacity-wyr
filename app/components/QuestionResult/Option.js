import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import Status from './Status';

const useStyles = makeStyles({
  page: {
    position: 'relative',
    borderRadius: 4,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: props => (props.highlighted ? '#3f51b5' : '#ddd'),
    color: props => (props.highlighted ? '#3f51b5' : 'rgba(0, 0, 0, 0.87)'),
    padding: 20,
    '&:not(:last-child)': {
      marginBottom: 20,
    },
  },
  badge: {
    position: 'absolute',
    top: '-15px',
    right: '-15px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFF',
    height: '40px',
    width: '40px',
    borderRadius: '100%',
    backgroundColor: '#3f51b5',
    fontSize: '11px',
  },
});

function Option({ option, otherOption, currentUserId }) {
  const highlighted = option.votes.includes(currentUserId);

  const classes = useStyles({ highlighted });

  const totalVotes = option.votes.length + otherOption.votes.length;
  const percentage = (100 / totalVotes) * option.votes.length;

  const question = option.text.charAt(0).toUpperCase() + option.text.substr(1);

  return (
    <div className={classes.page}>
      {highlighted && <span className={classes.badge}>My vote</span>}
      <Typography variant="h6">{`${question}?`}</Typography>

      <Status percentage={percentage} />

      <Typography variant="body2">
        {`${option.votes.length} out of ${totalVotes} votes`}
      </Typography>
    </div>
  );
}

Option.propTypes = {
  option: PropTypes.object.isRequired,
  otherOption: PropTypes.object.isRequired,
  currentUserId: PropTypes.string.isRequired,
};

export default Option;
