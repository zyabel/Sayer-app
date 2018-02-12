import React from 'react';
import { Link } from 'react-router-dom';
import './NewItem.css'

const NewItem = (props) => 
  <div className='new-item'>
    <Link to={`/comments/${props.id}`}>
      <span>{props.newItem}</span>
    </Link>
    <div className='blog-counter'><span>{props.comments}</span></div>
    <button className='delete-item-button' onClick={props.deleteItem}>Delete</button>  
  </div>

export default NewItem; 