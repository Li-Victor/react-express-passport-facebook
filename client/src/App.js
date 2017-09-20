import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

class App extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Route location={location} path="/" exact component={HomePage} />
        <Route location={location} path="/login" exact component={LoginPage} />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
