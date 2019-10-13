import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label`
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size.md}px;
  color: ${props => props.theme.palette.default.text};
  margin-bottom: ${props => props.theme.spacing[props.spacing] || 0}px;
  display: block;
  cursor: inherit;
`;

Label.propTypes = {
  spacing: PropTypes.string,
};

Label.defaultProps = {
  spacing: null,
};

export default Label;
