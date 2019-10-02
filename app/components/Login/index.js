/**
 *
 * Login
 *
 */

import React, { memo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';

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

function Login({ users, selectUser }) {
  const classes = useStyles();
  const [userID, setUserID] = useState('');

  const handleChangeUserID = event => setUserID(event.target.value);

  const handleSelectUser = () => userID !== '' && selectUser(userID);

  return (
    <Container className={classes.container} maxWidth="sm">
      <Card>
        <CardHeader title="Login" />

        <CardContent className={classes.content}>
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
                <MenuItem value={user.id}>{user.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSelectUser}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

Login.propTypes = {
  users: PropTypes.object.isRequired,
  selectUser: PropTypes.func.isRequired,
};

export default memo(Login);
