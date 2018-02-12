import React from 'react';
import './Comment.css'


const Comment = (props) => {
  return (
    <div className='comment-page'>
      <div className='comment-avatar'>
        <img src='#'></img>
      </div>
      <div className='comment-text'>
        {props.data}
      </div>
    </div>
  )
};

export default Comment; 