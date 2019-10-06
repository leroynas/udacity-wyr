import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    height: 30,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#ddd',
    marginTop: 12,
    marginBottom: 12,
  },
  progress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: props => `${props.percentage || 0}%`,
    left: 0,
    height: '30px',
    backgroundColor: '#3f51b5',
  },
  text: {
    margin: 0,
    fontSize: 14,
  },
  textInside: {
    marginRight: 12,
    color: '#fff',
  },
  textOutside: {
    marginLeft: 12,
    color: '#3f51b5',
  },
});

function Status({ percentage }) {
  const classes = useStyles({ percentage });
  return (
    <div className={classes.wrapper}>
      <div className={classes.progress}>
        {percentage !== 0 && (
          <p
            className={classNames([classes.text, classes.textInside])}
          >{`${percentage}%`}</p>
        )}
      </div>
      {percentage < 10 && (
        <p
          className={classNames([classes.text, classes.textOutside])}
        >{`${percentage}%`}</p>
      )}
    </div>
  );
}

Status.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Status;
