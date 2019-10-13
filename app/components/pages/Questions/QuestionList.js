import React from 'react';
import PropTypes from 'prop-types';

import Question from './Question';
import EmptyMessage from './EmptyMessage';

function QuestionList({ questions, loggedIn, history, type }) {
  const items = Object.values(questions);

  if (items.length)
    return items.map(question => (
      <Question
        key={question.id}
        question={question}
        history={history}
        type={type}
      />
    ));

  return <EmptyMessage loggedIn={loggedIn} type={type} />;
}

QuestionList.propTypes = {
  questions: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default QuestionList;
