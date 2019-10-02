/**
 *
 * PageHeader
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { CardHeader } from '@material-ui/core';

function PageHeader({ title }) {
  return <CardHeader title={title} />;
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(PageHeader);
