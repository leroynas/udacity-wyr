/**
 *
 * PageTabs
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { CardHeader, ButtonGroup, Button } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderBottomStyle: 'solid',
  },
});

function PageTabs({ tabs }) {
  const classes = useStyles();

  return (
    <CardHeader
      action={
        <ButtonGroup>
          {tabs.map(tab => (
            <Button
              key={tab.title}
              color="primary"
              variant={tab.active ? 'contained' : 'outlined'}
              onClick={() => !tab.active && tab.action()}
            >
              {tab.title}
            </Button>
          ))}
        </ButtonGroup>
      }
      className={classes.header}
    />
  );
}

PageTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
};

export default memo(PageTabs);
