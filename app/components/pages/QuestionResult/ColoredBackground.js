import styled from 'styled-components';

const ColoredBackground = styled.div`
  background-color: ${props => props.theme.palette.primary.main};
  opacity: 0.1;
  z-index: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default ColoredBackground;
