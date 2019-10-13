import styled from 'styled-components';
import PropTypes from 'prop-types';

import Flex from 'components/ui/Flex';

const Container = styled(Flex)`
  padding: ${props => props.theme.spacing.md}px
    ${props => props.theme.spacing.md}px;
  background-color: ${props =>
    props.backgroundColor
      ? props.theme.palette.score[props.backgroundColor]
      : props.theme.palette.default.main};
  color: ${props =>
    props.backgroundColor
      ? props.theme.palette.default.light
      : props.theme.palette.default.text};
  border-radius: ${props => props.theme.shape.borderRadius.md}px;
  flex: unset;
`;

Container.propTypes = {
  backgroundColor: PropTypes.string,
};

Container.defaultProps = {
  backgroundColor: null,
  direction: 'column',
  alignItems: 'center',
};

export default Container;
