import React from 'react';
import PropTypes from 'prop-types';

import Question from './Question';

function QuestionList({ questions, history, type }) {
  return Object.values(questions).map(question => (
    <Question
      key={question.id}
      question={question}
      history={history}
      type={type}
    />
  ));
}

QuestionList.propTypes = {
  questions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default QuestionList;
