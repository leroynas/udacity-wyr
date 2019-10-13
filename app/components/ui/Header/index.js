/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Container from 'components/ui/Container';
import Heading from 'components/ui/Heading';
import Navigation from 'components/ui/Navigation';

import Wrapper from './Wrapper';

function Header({ title, currentUser, logoutUser }) {
  return (
    <Wrapper>
      <Container
        size="xl"
        height={80}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading size="xl">{title}</Heading>

        <Navigation currentUser={currentUser} logoutUser={logoutUser} />
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  currentUser: PropTypes.object,
  logoutUser: PropTypes.func.isRequired,
};

export default memo(Header);
