import styled from 'styled-components';

const Avatar = styled.img`
  width: ${props => props.theme.sizes.avatar}px;
  height: ${props => props.theme.sizes.avatar}px;
  margin-top: -${props => props.theme.spacing.sm}px;
  margin-right: ${props => props.theme.spacing.lg}px;
`;

export default Avatar;
