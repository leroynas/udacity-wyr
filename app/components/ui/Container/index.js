import styled from 'styled-components';
import PropTypes from 'prop-types';

import Flex from 'components/ui/Flex';

const Container = styled(Flex)`
  max-width: ${props => props.theme.sizes.width[props.size]}px;
  height: ${props => `${props.height}px` || 'auto'};
  margin-left: auto;
  margin-right: auto;
`;

Container.propTypes = {
  size: PropTypes.string,
  direction: PropTypes.string,
};

Container.defaultProps = {
  size: 'md',
  height: 'auto',
  direction: 'column',
};

export default Container;
