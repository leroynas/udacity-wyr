/**
 *
 * Login
 *
 */

import React, { memo, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';

import Page from 'components/ui/Page';
import PageHeader from 'components/ui/PageHeader';
import PageContent from 'components/ui/PageContent';

const useStyles = makeStyles({
  container: {
    paddingTop: 30,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    marginTop: 30,
  },
});

function Login({ users, loginUser }) {
  const classes = useStyles();
  const [userID, setUserID] = useState('');

  const handleChangeUserID = event => setUserID(event.target.value);

  const handleLoginUser = () => userID !== '' && loginUser(userID);

  return (
    <Page>
      <PageHeader title="Login" />

      <PageContent>
        <FormControl variant="filled">
          <InputLabel>User</InputLabel>

          <Select
            value={userID}
            onChange={handleChangeUserID}
            inputProps={{
              name: 'User',
            }}
          >
            {Object.values(users).map(user => (
              <MenuItem key={user.id} value={user.id}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleLoginUser}
        >
          Login
        </Button>
      </PageContent>
    </Page>
  );
}

Login.propTypes = {
  users: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};

export default memo(Login);
