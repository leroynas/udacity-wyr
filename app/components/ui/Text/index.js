import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size[props.size]};
  margin: 0;
`;

Text.propTypes = {
  size: PropTypes.string,
};

Text.defaultProps = {
  size: 'md',
};

export default Text;
