import styled from 'styled-components';

const Badge = styled.div`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.primary.text};
  padding: ${props => props.theme.spacing.xs}px
    ${props => props.theme.spacing.sm}px;
  border-radius: ${props => props.theme.shape.borderRadius.sm}px 0 0 0;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default Badge;
