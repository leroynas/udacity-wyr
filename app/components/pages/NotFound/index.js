/**
 *
 * LeaderBoard
 *
 */

import React, { memo } from 'react';

import Container from 'components/ui/Container';
import Title from 'components/ui/Title';
import Page from 'components/ui/Page';
import Text from 'components/ui/Text';

function NotFound() {
  return (
    <Container>
      <Title>Page Not Found</Title>

      <Page>
        <Text spacing="sm">
          {`The page you were looking for doesn't exist`}
        </Text>
        <Text>
          {`You may have mistyped the address or the page may have been removed`}
        </Text>
      </Page>
    </Container>
  );
}

export default memo(NotFound);
