import styled from 'styled-components';

const Title = styled.h1`
  padding-left: ${props => props.theme.spacing.lg}px;
  padding-right: ${props => props.theme.spacing.lg}px;
  padding-bottom: ${props => props.theme.spacing.md}px;
  font-family: ${props => props.theme.font.family.secondary};
  color: ${props => props.theme.palette.primary.text};
  font-size: ${props => props.theme.font.size.xl}px;
  margin-top: 0;
  margin-bottom: 0;
`;

export default Title;
