import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.default.main};
  min-height: calc(100% - ${props => props.theme.palette.default.main});
  width: 100vw;
  min-height: 100vh;
`;

export default Wrapper;
