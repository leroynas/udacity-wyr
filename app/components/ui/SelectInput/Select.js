import styled from 'styled-components';

const Select = styled.div`
  overflow: ${props => (props.show ? 'visible' : 'hidden')};
  background-color: ${props => props.theme.palette.default.main};
  border-radius: ${props => props.theme.shape.borderRadius.sm}px;
  height: ${props => props.theme.sizes.input}px;
  width: 100%;
  position: relative;
  cursor: pointer;
`;

export default Select;
