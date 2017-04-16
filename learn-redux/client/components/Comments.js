/**
 * Created by Alejandro on 15.04.2017.
 */
import React, { Component } from 'react';

class Comments extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  renderComment(comment, i) {
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment'
                  onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>
            &times;
          </button>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className='comment'>
        { this.props.postComponents.map(this.renderComment.bind(this)) }
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='author' placeholder='author'/>
          <input type='text' ref='comment' placeholder='comment'/>
          <input type='submit' hidden/>
        </form>
      </div>
    );
  }
}

export default Comments;
