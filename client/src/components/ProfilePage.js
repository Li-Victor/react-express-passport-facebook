import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import isEmptyObject from '../utils/emptyObject';

const ProfilePage = ({ user }) => {
  if (user === null) return <div>Something has gone terribly wrong</div>;
  else if (isEmptyObject(user)) return <Redirect to="/login" />;
  return (
    <div>
      <p>
        ID: {user.id}
        <br />
        Name: {user.displayName}
        <br />
        {user.emails && <span>Email: {user.emails[0].value}</span>}
      </p>
      <a href="/auth/logout">Logout</a>
    </div>
  );
};

ProfilePage.propTypes = {
  // eslint-disable-next-line
  user: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    user: state
  };
}

export default connect(mapStateToProps)(ProfilePage);
