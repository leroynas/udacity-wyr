/**
 *
 * Login
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import FormGroup from 'components/ui/FormGroup';
import Container from 'components/ui/Container';
import Title from 'components/ui/Title';
import Page from 'components/ui/Page';
import Label from 'components/ui/Label';
import SelectInput from 'components/ui/SelectInput';
import Button from 'components/ui/Button';

function Login({ users, loginUser }) {
  const [userID, setUserID] = useState('');

  const handleLoginUser = () => userID !== '' && loginUser(userID);

  return (
    <Container>
      <Title>Login</Title>

      <Page>
        <FormGroup>
          <Label spacing="xs">Username</Label>

          <SelectInput
            value={userID}
            onChange={setUserID}
            title="username"
            options={Object.values(users).map(user => ({
              title: user.name,
              value: user.id,
              icon: user.avatarURL,
            }))}
          />
        </FormGroup>

        <Button onClick={handleLoginUser}>Login</Button>
      </Page>
    </Container>
  );
}

Login.propTypes = {
  users: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};

export default memo(Login);
