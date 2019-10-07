/**
 *
 * Questions
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Page from 'components/Page';
import PageTabs from 'components/PageTabs';
import PageContent from 'components/PageContent';

import QuestionList from './QuestionList';

function Questions({
  questionsAnswered,
  questionsUnanswered,
  history,
  location,
}) {
  const tabs = [
    {
      title: 'UNANSWERED QUESTIONS',
      action: () => history.push('/questions/unanswered'),
      active: location.pathname.includes('/questions/unanswered'),
    },
    {
      title: 'ANSWERED QUESTIONS',
      action: () => history.push('/questions/answered'),
      active: location.pathname.includes('/questions/answered'),
    },
  ];

  return (
    <Page>
      <PageTabs tabs={tabs} />

      <PageContent>
        <Switch>
          <Route
            path="/questions/unanswered"
            render={() => (
              <QuestionList questions={questionsUnanswered} history={history} />
            )}
          />

          <Route
            path="/questions/answered"
            render={() => (
              <QuestionList questions={questionsAnswered} history={history} />
            )}
          />

          <Redirect to="/questions/unanswered" />
        </Switch>
      </PageContent>
    </Page>
  );
}

Questions.propTypes = {
  questionsAnswered: PropTypes.object.isRequired,
  questionsUnanswered: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default memo(Questions);
