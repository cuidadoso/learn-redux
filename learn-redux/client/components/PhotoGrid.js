/**
 * Created by apyreev on 14-Apr-17.
 */
// external dependencies
import React, { Component } from 'react';
import Photo from "./Photo";

class PhotoGrid extends Component {
  render() {
    return (
      <div className='photo-grid'>
        <pre>
          {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post}/>)}
        </pre>
      </div>
    );
  }
}

export default PhotoGrid;
