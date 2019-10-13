import styled from 'styled-components';

const Option = styled.button`
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size.md}px;
  padding: 0 ${props => props.theme.spacing.md}px;
  line-height: ${props => props.theme.sizes.input}px;
  color: ${props => props.theme.palette.default.text};
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  cursor: pointer;

  background-color: ${props =>
    props.selected
      ? props.theme.palette.default.main
      : props.theme.palette.default.light};

  &:hover {
    background-color: ${props => props.theme.palette.default.main};
  }
`;

export default Option;
