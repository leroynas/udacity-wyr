import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/ui/Icon';

import Select from './Select';
import Dropdown from './Dropdown';
import Option from './Option';

function SelectInput({ options, value, onChange, title }) {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const selectOptions = [{ value: '', title: `Select a ${title}` }, ...options];

  const selected = selectOptions.find(option => option.value === value);

  const indexSelected = selected
    ? selectOptions.findIndex(option => option.value === selected.value)
    : 0;

  return (
    <Select onClick={toggleShow} show={show}>
      <Dropdown indexSelected={indexSelected}>
        {selectOptions.map((option, index) => (
          <Option
            key={option.value}
            onClick={() => onChange(option.value)}
            selected={indexSelected === index}
          >
            {option.icon && <Icon src={option.icon} />}
            {option.title}
          </Option>
        ))}
      </Dropdown>
    </Select>
  );
}

SelectInput.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default SelectInput;
