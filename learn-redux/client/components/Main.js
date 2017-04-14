/**
 * Created by apyreev on 14-Apr-17.
 */
// external dependencies
import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
  render() {
    // TODO replace depricated React.cloneElement.
    return (
      <div>
        <h1>
          <Link to='/' >Reduxstagram</Link>
        </h1>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}

export default Main;
