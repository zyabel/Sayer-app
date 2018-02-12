import React from 'react';
import { Link } from 'react-router-dom';
import './NewItemPage.css'


const NewItemPage = () => {
  let id = 0;
  let newsArray = [];
  const formHandler = () => {
    let newItem = {
      newItem: this.textField.value,
      comment: {},
      id: id,
    };
    newsArray.push(newItem);
    localStorage.setItem('blogData', JSON.stringify(newsArray));
    id++;
  }
  return (
  <div className='new-item-page'>
      <div className='new-item-page-header'>
      <Link to='/'>
        <button className='button-new-item-back'><span>&larr;</span></button>
      </Link>
      <p>Create new item</p>
    </div>
    <form onSubmit={formHandler}>
      <input type='text' placeholder='New item title..' ref={input => this.textField = input}></input>
      <button className='button-new-item-submit'><span>></span></button>
    </form>
  </div>
)};

export default NewItemPage; 