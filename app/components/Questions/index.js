/**
 *
 * Questions
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Page from 'components/Page';
import PageHeader from 'components/PageHeader';
import PageContent from 'components/PageContent';

import Question from './Question';

function Questions({ questions, history }) {
  return (
    <Page>
      <PageHeader title="Questions" />

      <PageContent>
        {Object.values(questions).map(question => (
          <Question key={question.id} question={question} history={history} />
        ))}
      </PageContent>
    </Page>
  );
}

Questions.propTypes = {
  questions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default memo(Questions);
