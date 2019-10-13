/**
 *
 * Questions
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Container from 'components/ui/Container';
import Tabs from 'components/ui/Tabs';
import Page from 'components/ui/Page';

import QuestionList from './QuestionList';

function Questions({
  questionsAnswered,
  questionsUnanswered,
  history,
  location,
}) {
  const tabs = [
    {
      title: 'Unanswered Questions',
      onClick: () => history.push('/questions/unanswered'),
      selected: location.pathname.includes('/questions/unanswered'),
    },
    {
      title: 'Answered Questions',
      onClick: () => history.push('/questions/answered'),
      selected: location.pathname.includes('/questions/answered'),
    },
  ];

  return (
    <Container>
      <Tabs tabs={tabs} />

      <Page>
        <Switch>
          <Route
            path="/questions/unanswered"
            render={() => (
              <QuestionList
                questions={questionsUnanswered}
                history={history}
                type="unanswered"
              />
            )}
          />

          <Route
            path="/questions/answered"
            render={() => (
              <QuestionList
                questions={questionsAnswered}
                history={history}
                type="answered"
              />
            )}
          />

          <Redirect to="/questions/unanswered" />
        </Switch>
      </Page>
    </Container>
  );
}

Questions.propTypes = {
  questionsAnswered: PropTypes.object.isRequired,
  questionsUnanswered: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default memo(Questions);
