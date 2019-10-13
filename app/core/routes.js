import LoginContainer from 'containers/LoginContainer/Loadable';
import QuestionsContainer from 'containers/QuestionsContainer/Loadable';
import QuestionContainer from 'containers/QuestionContainer/Loadable';
import QuestionResultContainer from 'containers/QuestionResultContainer/Loadable';
import NewQuestionContainer from 'containers/NewQuestionContainer/Loadable';
import LeaderBoardContainer from 'containers/LeaderBoardContainer/Loadable';
import NotFound from 'components/pages/NotFound/Loadable';

const routes = {
  default: '/questions/unanswered',
  public: [
    {
      path: '/login',
      component: LoginContainer,
      exact: true,
    },
    {
      path: '/questions',
      component: QuestionsContainer,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
  protected: [
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
      path: '/new',
      component: NewQuestionContainer,
      exact: true,
    },
    {
      path: '/leaderboard',
      component: LeaderBoardContainer,
      exact: true,
    },
  ],
};

export default routes;
