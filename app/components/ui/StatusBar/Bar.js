import styled from 'styled-components';

import Flex from 'components/ui/Flex';

const Bar = styled(Flex)`
  height: ${props => props.theme.sizes.statusBar}px;
  background-color: ${props => props.theme.palette.default.main};
  border-radius: ${props => props.theme.shape.borderRadius.sm}px;
  margin-top: ${props => props.theme.spacing.xs}px;
  margin-bottom: ${props => props.theme.spacing.xs}px !important;
  width: 100%;
`;

export default Bar;
