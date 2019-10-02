/**
 *
 * LoginContainer
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Login from 'components/Login/Loadable';

import { loadUsers, selectUser } from './actions';
import { makeSelectUsers } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'loginContainer';

export function LoginContainer(props) {
  const { users, getUsers } = props;

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (Object.entries(users).length === 0) getUsers();
  }, []);

  return <Login {...props} />;
}

LoginContainer.propTypes = {
  users: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
  selectUser: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(loadUsers()),
    selectUser: id => dispatch(selectUser(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginContainer);
