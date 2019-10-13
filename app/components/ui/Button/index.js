import styled from 'styled-components';

const Button = styled.button`
  padding-left: ${props => props.theme.spacing.md}px;
  padding-right: ${props => props.theme.spacing.md}px;
  line-height: ${props => props.theme.sizes.input}px;
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.primary.text};
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size.lg}px;
  border-radius: ${props => props.theme.shape.borderRadius.sm}px;
  cursor: pointer;
  width: 100%;
  border: none;
  outline: none;

  &:hover {
    background-color: ${props => props.theme.palette.primary.light};
  }
`;

export default Button;
