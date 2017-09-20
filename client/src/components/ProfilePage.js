import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProfilePage extends React.Component {
  render() {
    const { user } = this.props;
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
  }
}

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
