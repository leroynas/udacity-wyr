import styled from 'styled-components';
import PropTypes from 'prop-types';

const Flex = styled.div`
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  display: flex;
  flex: 1;
  cursor: ${props => props.cursor || 'inherit'};

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing[props.spacing] || 0}px;
  }
`;

Flex.propTypes = {
  direction: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  spacing: PropTypes.string,
  cursor: PropTypes.string,
};

Flex.defaultProps = {
  direction: 'row',
  justifyContent: 'normal',
  alignItems: 'normal',
  spacing: null,
  cursor: null,
};

export default Flex;
