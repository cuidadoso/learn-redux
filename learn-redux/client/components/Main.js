/**
 * Created by apyreev on 14-Apr-17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to='/' >Reduxstagram</Link>
        </h1>
      </div>
    );
  }
}

export default Main;
