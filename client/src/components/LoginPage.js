import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import isEmptyObject from '../utils/emptyObject';

const LoginPage = ({ user }) => {
  if (isEmptyObject(user)) return <a href="/login/facebook">Log In with Facebook</a>;
  return <Redirect to="/profile" />;
};

LoginPage.propTypes = {
  // eslint-disable-next-line
  user: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    user: state
  };
}

export default connect(mapStateToProps)(LoginPage);
