import React from 'react';
import PropTypes from 'prop-types';

import Outer from './Outer';
import Inner from './Inner';

function Radio({ selected }) {
  return <Outer>{selected && <Inner />}</Outer>;
}

Radio.propTypes = {
  selected: PropTypes.bool.isRequired,
};

export default Radio;
