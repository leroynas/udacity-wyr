import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  colorPrimary,
  colorMuted,
  fontDefaultSize,
  fontDefaultColor,
  spacingSmall,
  fontDefaultColorLight,
  borderRadiusNormal,
} from 'core/theme';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 30px;
  border-radius: ${borderRadiusNormal};
  overflow: hidden;
  background-color: ${colorMuted};
  margin: ${spacingSmall} 0;
`;

const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${props => props.percentage || 0}%;
  left: 0;
  height: 30px;
  background-color: ${colorPrimary};
`;

const Text = styled.p`
  margin: 0;
  ${props => props.left && `margin-left: ${spacingSmall};`}
  ${props => props.right && `margin-right: ${spacingSmall};`}
  font-size: ${fontDefaultSize};
  color: ${props => (props.light ? fontDefaultColorLight : fontDefaultColor)};
`;

function Status({ percentage }) {
  return (
    <Wrapper>
      <Progress percentage={percentage}>
        {percentage !== 0 && (
          <Text light right>
            {`${percentage}%`}
          </Text>
        )}
      </Progress>
      {percentage === 0 && <Text left>{percentage}%</Text>}
    </Wrapper>
  );
}

Status.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Status;
