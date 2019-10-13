import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = styled.span`
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size[props.size]}px;
  margin: 0;
  margin-bottom: ${props => props.theme.spacing[props.spacing] || 0}px;
  font-weight: bold;
  display: block;
`;

Heading.propTypes = {
  size: PropTypes.string,
  spacing: PropTypes.string,
};

Heading.defaultProps = {
  size: 'lg',
  spacing: null,
};

export default Heading;
