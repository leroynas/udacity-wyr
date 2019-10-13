import React from 'react';
import PropTypes from 'prop-types';

import Text from 'components/ui/Text';

function EmptyMessage({ loggedIn, type }) {
  let message = `There are no ${type} questions.`;

  if (!loggedIn)
    message += ' Please log in to your account to see your answered questions.';

  return <Text>{message}</Text>;
}

EmptyMessage.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default EmptyMessage;
