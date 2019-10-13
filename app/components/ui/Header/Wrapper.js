import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.primary.text};
  height: ${props => props.theme.sizes.header}px;
  width: 100%;
`;

export default Wrapper;
