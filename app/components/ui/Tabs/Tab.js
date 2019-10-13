import styled from 'styled-components';

const Tab = styled.span`
  padding-top: ${props => props.theme.spacing.sm}px;
  padding-bottom: ${props => props.theme.spacing.sm}px;
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size.lg}px;
  color: ${props => props.theme.palette.primary.text};
  border-bottom: ${props =>
    props.selected ? `4px solid ${props.theme.palette.default.light}` : 'none'};
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex: 1;
`;

export default Tab;
