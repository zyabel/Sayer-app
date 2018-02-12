import React from 'react';
import Comment from '../Comment/Comment';
import { Link } from 'react-router-dom';
import './ItemCommentsPage.css'


const ItemCommentsPage = (props) => {
  let pageId = props.match.params.id;
  let data = JSON.parse(localStorage.getItem('blogData'))[pageId];
 
  let id = 0;
  let newsArray = JSON.parse(localStorage.getItem('blogData'));

  let arrayOfComments=[];
  for (let key in data.comment) {  
    arrayOfComments.push(data.comment[key])
  };

  const formHandler = () => {
    id++;
    let com = 'com' + id;
    data.comment[com] = this.textField.value ;
    let newDataArray = newsArray.filter(object => data.id !== object.id);
    newDataArray.push(data);
    localStorage.setItem('blogData', JSON.stringify(newDataArray)); 
  }

  return (
    <div className='new-comments-page'>
      <div className='new-comments-page-header'>
        <Link to='/'>
          <button className='button-new-comment-back'><span>&larr;</span></button>
        </Link>
        <p>First item with customized long title</p>
      </div>
      <div className='comments-wrap'>
        {arrayOfComments.length === 0
        ? <div className='error-message'>Have no comments yet</div> 
        : arrayOfComments.map((obj, key) => <Comment key={key} data={obj} />)}      
      </div>
      <form onSubmit={formHandler}>
        <input type='text' placeholder='New comment goes here..' ref={input => this.textField = input}></input>
        <button className='button-new-comment-submit'><span>></span></button>
      </form>
    </div>
  )
};

export default ItemCommentsPage; 