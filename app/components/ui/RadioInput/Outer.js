import styled from 'styled-components';

const Outer = styled.div`
  background-color: ${props => props.theme.palette.default.main};
  margin-right: ${props => props.theme.spacing.sm}px;
  border-radius: 100%;
  height: 28px;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Outer;
