import styled from 'styled-components';

const Page = styled.div`
  background-color: ${props => props.theme.palette.default.light};
  border-radius: ${props => props.theme.shape.borderRadius.lg}px;
  box-shadow: ${props => props.theme.shape.shadow.lg};
  padding: ${props => props.theme.spacing.xl}px
    ${props => props.theme.spacing.lg}px;
`;

export default Page;
