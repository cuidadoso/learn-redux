/**
 * Created by apyreev on 14-Apr-17.
 */
// external dependencies
import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

// import comments
class Single extends Component {
  render() {
    const { postId } = this.props.params;
    const { posts, comments } = this.props;
    const i = posts.findIndex((post) => post.code === postId);
    const post = posts[i];
    const postComments = comments[postId];

    return (
      <div className='single-photo' >
        <Photo i={i} post={post} {...this.props} />
        <Comments postComponents={postComments}/>
      </div>
    );
  }
}

export default Single;
