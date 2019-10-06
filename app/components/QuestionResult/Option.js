import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';

import {
  colorPrimary,
  colorPrimaryLight,
  colorSecondary,
  colorMuted,
  fontDefaultColorLight,
  spacingDefault,
  borderRadiusLarge,
} from 'core/theme';

import Status from './Status';

const Page = styled.div`
  position: relative;
  border-radius: ${borderRadiusLarge};
  border: 2px solid ${colorMuted};
  padding: ${spacingDefault};

  ${props =>
    props.highlighted &&
    css`
      background-color: ${colorPrimaryLight};
      border-color: ${colorPrimary};
      color: ${colorPrimary};
    `}

  &:not(:last-child) {
    margin-bottom: ${spacingDefault};
  }
`;

const Badge = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${fontDefaultColorLight};
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: ${colorSecondary};
  font-size: 11px;
`;

function Option({ option, otherOption, currentUserId }) {
  const totalVotes = option.votes.length + otherOption.votes.length;
  const percentage = (100 / totalVotes) * option.votes.length;

  const question = option.text.charAt(0).toUpperCase() + option.text.substr(1);
  const highlighted = option.votes.includes(currentUserId);

  return (
    <Page highlighted={highlighted}>
      {highlighted && <Badge>My vote</Badge>}
      <Typography variant="h6">{`${question}?`}</Typography>

      <Status percentage={percentage} />

      <Typography variant="body2">
        {`${option.votes.length} out of ${totalVotes} votes`}
      </Typography>
    </Page>
  );
}

Option.propTypes = {
  option: PropTypes.object.isRequired,
  otherOption: PropTypes.object.isRequired,
  currentUserId: PropTypes.string.isRequired,
};

export default Option;
