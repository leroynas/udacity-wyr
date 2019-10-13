import styled from 'styled-components';
import PropTypes from 'prop-types';

import Flex from 'components/ui/Flex';

const Container = styled(Flex)`
  padding: ${props => props.theme.spacing.lg}px
    ${props => props.theme.spacing.md}px;
  color: ${props =>
    props.highlighted
      ? props.theme.palette.primary.main
      : props.theme.palette.default.text};
  border-width: 3px;
  border-style: solid;
  border-color: ${props =>
    props.highlighted
      ? props.theme.palette.primary.main
      : props.theme.palette.default.main};
  border-radius: ${props => props.theme.shape.borderRadius.sm}px;
  position: relative;
`;

Container.propTypes = {
  highlighted: PropTypes.bool.isRequired,
};

Container.defaultProps = {
  direction: 'column',
  spacing: 'sm',
};

export default Container;
