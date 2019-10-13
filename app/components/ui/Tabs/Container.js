import styled from 'styled-components';

const Container = styled.div`
  padding-left: ${props => props.theme.spacing.lg}px;
  padding-right: ${props => props.theme.spacing.lg}px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export default Container;
