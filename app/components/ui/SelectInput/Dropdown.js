import styled from 'styled-components';
import PropTypes from 'prop-types';

const Dropdown = styled.div`
  background-color: ${props => props.theme.palette.default.light};
  border-radius: ${props => props.theme.shape.borderRadius.sm}px;
  box-shadow: ${props => props.theme.shape.shadow.lg};
  padding: ${props => props.theme.spacing.md}px 0;
  min-width: 100%;
  position: absolute;
  z-index: 9;
  top: ${props =>
    -props.theme.sizes.input * props.indexSelected - props.theme.spacing.md}px;
`;

Dropdown.propTypes = {
  indexSelected: PropTypes.number,
};

Dropdown.defaultProps = {
  indexSelected: 0,
};

export default Dropdown;
