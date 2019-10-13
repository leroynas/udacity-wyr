import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled('button')`
  font-family: ${props => props.theme.font.family.primary};
  font-size: ${props => props.theme.font.size.xs}px;
  color: ${props => props.theme.palette.primary.text};
  padding-left: ${props => props.theme.spacing.sm}px;
  padding-right: ${props => props.theme.spacing.sm}px;
  background-color: ${props =>
    props.active ? props.theme.palette.primary.light : 'transparent'};
  border-radius: ${props => props.theme.shape.borderRadius.sm}px;
  margin-left: ${props => props.theme.spacing.xs}px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  text-transform: uppercase;
  border: none;
  outline: none;

  ${props =>
    props.clickable &&
    css`
      cursor: pointer;

      &:hover {
        background-color: ${props.theme.palette.primary.light};
      }
    `}
`;

Button.propTypes = {
  clickable: PropTypes.bool,
};

Button.defaultProps = {
  clickable: true,
};

export default Button;
