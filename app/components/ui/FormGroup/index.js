import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing[props.spacing]}px;
  }
`;

FormGroup.propTypes = {
  spacing: PropTypes.string,
};

FormGroup.defaultProps = {
  spacing: 'lg',
};

export default FormGroup;
