import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = styled.span`
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size[props.size]};
  margin: 0;
`;

Heading.propTypes = {
  size: PropTypes.string,
};

Heading.defaultProps = {
  size: 'lg',
};

export default Heading;
