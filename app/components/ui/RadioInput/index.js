import React from 'react';
import PropTypes from 'prop-types';

import Flex from 'components/ui/Flex';
import Label from 'components/ui/Label';

import Radio from './Radio';

function RadioInput({ options, value, onChange }) {
  const selected = options.find(option => option.value === value) || '';

  return (
    <Flex direction="column">
      {options.map(option => (
        <Flex
          alignItems="center"
          cursor="pointer"
          spacing="sm"
          onClick={() => onChange(option.value)}
          key={option.value}
        >
          <Radio selected={selected.value === option.value} />
          <Label>{option.title}</Label>
        </Flex>
      ))}
    </Flex>
  );
}

RadioInput.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default RadioInput;
