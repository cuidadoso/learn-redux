/**
 * Created by apyreev on 14-Apr-17.
 */
// external dependencies
import React, { Component } from 'react';
import Photo from "./Photo";
import Comments from "./Comments";

// import comments
class Single extends Component {
  render() {
    const { posts, params } = this.props;
    const i = posts.findIndex((post) => post.code === params.postId);
    const post = posts[i];

    return (
      <div className='single-photo' >
        <Photo i={i} post={post} {...this.props} />
        <Comments/>
      </div>
    );
  }
}

export default Single;
