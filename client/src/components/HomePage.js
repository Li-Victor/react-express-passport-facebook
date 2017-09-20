import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome! Please <Link to="/login">log in</Link>
        </p>
      </div>
    );
  }
}

export default HomePage;
