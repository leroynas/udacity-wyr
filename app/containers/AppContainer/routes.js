import LoginContainer from '../LoginContainer/Loadable';
import QuestionsContainer from '../QuestionsContainer/Loadable';
import QuestionContainer from '../QuestionContainer/Loadable';
import NewQuestionContainer from '../NewQuestionContainer/Loadable';

const routes = {
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
      path: '/new-question',
      component: NewQuestionContainer,
    },
  ],
};

export default routes;
