import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Tab from './Tab';

function Tabs({ tabs }) {
  return (
    <Container>
      {tabs.map(tab => (
        <Tab {...tab} key={tab.title}>
          {tab.title}
        </Tab>
      ))}
    </Container>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
};

export default Tabs;
