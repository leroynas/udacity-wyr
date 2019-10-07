import LoginContainer from 'containers/LoginContainer/Loadable';
import QuestionsContainer from 'containers/QuestionsContainer/Loadable';
import QuestionContainer from 'containers/QuestionContainer/Loadable';
import QuestionResultContainer from 'containers/QuestionResultContainer/Loadable';
import NewQuestionContainer from 'containers/NewQuestionContainer/Loadable';

const routes = {
  default: '/questions/unanswered',
  public: [
    {
      path: '/login',
      component: LoginContainer,
      exact: true,
    },
  ],
  protected: [
    {
      path: '/questions',
      component: QuestionsContainer,
    },
    {
      path: '/question/:id',
      component: QuestionContainer,
      exact: true,
    },
    {
      path: '/question/:id/result',
      component: QuestionResultContainer,
      exact: true,
    },
    {
      path: '/new-question',
      component: NewQuestionContainer,
      exact: true,
    },
  ],
};

export default routes;
