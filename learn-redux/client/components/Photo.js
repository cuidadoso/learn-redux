/**
 * Created by Alejandro on 15.04.2017.
 */
// external dependencies
import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends Component {
  render() {
    const { post, i, comments } = this.props;
    const link = `/view/${post.code}`;

    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={link}>
            <img src={post.display_src} alt={post.caption} className='grid-photo'/>
          </Link>
          <CSSTransitionGroup transitionName='like' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={post.likes} className='likes-heart'>
              {post.likes}
            </span>
            <figcaption>
              <p>{post.caption}</p>
              <div className='control-buttons'>
                <button onClick={this.props.increment.bind(null, i)} className='likes'>&herts; {post.likes}</button>
                <Link to={link} className='button'>
                  <span className='comment-count'>
                    <span className='speech-bubble'/>
                    {comments[post.code] ? comments[post.code].length : 0 }
                  </span>
                </Link>
              </div>
            </figcaption>
          </CSSTransitionGroup>
        </div>
      </figure>
    );
  }
}

export default Photo;
