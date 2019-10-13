import styled from 'styled-components';

const TextInput = styled.input`
  padding-left: ${props => props.theme.spacing.md}px;
  padding-right: ${props => props.theme.spacing.md}px;
  line-height: ${props => props.theme.sizes.input}px;
  background-color: ${props => props.theme.palette.default.main};
  color: ${props => props.theme.palette.default.text};
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size.md}px;
  border-radius: ${props => props.theme.shape.borderRadius.sm}px;
  border: none;
  outline: none;
  width: 100%;

  &:focus {
    box-shadow: ${props => props.theme.shape.shadow.md};
  }
`;

export default TextInput;
