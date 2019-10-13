import styled from 'styled-components';

const Icon = styled.img`
  margin-top: -${props => props.theme.spacing.xs / 3}px;
  margin-right: ${props => props.theme.spacing.xs}px;
  width: ${props => props.theme.sizes.icon}px;
  height: ${props => props.theme.sizes.icon}px;
`;

export default Icon;
