import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size[props.size]}px;
  margin: 0;
  display: block;
  cursor: inherit;
  padding: ${props => props.theme.spacing[props.padding] || 0}px;

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing[props.spacing] || 0}px;
  }
`;

Text.propTypes = {
  size: PropTypes.string,
  spacing: PropTypes.string,
  padding: PropTypes.string,
};

Text.defaultProps = {
  size: 'md',
  spacing: null,
  padding: null,
};

export default Text;
