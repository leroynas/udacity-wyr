/**
 *
 * LoginContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { loginUser } from 'containers/App/actions';
import { makeSelectUsers } from 'containers/App/selectors';
import Login from 'components/Login/Loadable';

export function LoginContainer(props) {
  return <Login {...props} />;
}

LoginContainer.propTypes = {
  users: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    loginUser: id => dispatch(loginUser(id)),
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
