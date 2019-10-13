import styled from 'styled-components';
import PropTypes from 'prop-types';

import Flex from 'components/ui/Flex';

const Status = styled(Flex)`
  height: ${props => props.theme.sizes.statusBar}px;
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.primary.text};
  border-radius: ${props => props.theme.shape.borderRadius.sm}px;
  width: ${props => props.percentage}%;
  flex: unset;
`;

Status.propTypes = {
  percentage: PropTypes.number,
};

Status.defaultProps = {
  percentage: 0,
};

export default Status;
