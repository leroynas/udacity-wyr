import styled from 'styled-components';

const Outer = styled.div`
  background-color: ${props => props.theme.palette.primary.main};
  border-radius: 100%;
  height: 18px;
  width: 18px;
`;

export default Outer;
