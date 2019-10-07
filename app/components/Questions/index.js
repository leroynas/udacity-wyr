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

function Questions({ questionsAnswered, history }) {
  return (
    <Page>
      <PageHeader title="Questions" />

      <PageContent>
        {Object.values(questionsAnswered).map(question => (
          <Question key={question.id} question={question} history={history} />
        ))}
      </PageContent>
    </Page>
  );
}

Questions.propTypes = {
  questionsAnswered: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default memo(Questions);
