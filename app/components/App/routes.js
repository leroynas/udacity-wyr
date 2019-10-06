import LoginContainer from 'containers/LoginContainer/Loadable';
import QuestionsContainer from 'containers/QuestionsContainer/Loadable';
import QuestionContainer from 'containers/QuestionContainer/Loadable';
import QuestionResultContainer from 'containers/QuestionResultContainer/Loadable';
import NewQuestionContainer from 'containers/NewQuestionContainer/Loadable';

const routes = {
  default: '/questions',
  public: [
    {
      path: '/login',
      component: LoginContainer,
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
    },
    {
      path: '/question/:id/result',
      component: QuestionResultContainer,
    },
    {
      path: '/new-question',
      component: NewQuestionContainer,
    },
  ],
};

export default routes;
