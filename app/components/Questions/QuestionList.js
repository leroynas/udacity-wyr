import React from 'react';
import PropTypes from 'prop-types';

import Question from './Question';

function QuestionList({ questions, history }) {
  return Object.values(questions).map(question => (
    <Question key={question.id} question={question} history={history} />
  ));
}

QuestionList.propTypes = {
  questions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default QuestionList;
