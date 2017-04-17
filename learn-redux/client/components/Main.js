/**
 * Created by apyreev on 14-Apr-17.
 */
// external dependencies
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import actionCreators from '../actions';

@connect(
  (state) => ({
    posts: state.posts,
    comments: state.comments
  }),
  actionCreators
)
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

Main.propTypes = {
  posts: PropTypes.array,
  comments: PropTypes.object
};

export default Main;
