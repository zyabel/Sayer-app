import React, { Component } from 'react';
import AddItemButton from '../AddItemButton/AddItemButton';
import NewItem from '../NewItem/NewItem';
import { Link } from 'react-router-dom';
import './AllItemsPage.css';

class AllItemsPage extends Component {
  constructor() {
    super() 
    this.state = {};
  }
  
  counter = (data) => {
    let i = 0;
    for (let key in data) {
      i++;
    }
    return i;
  }

  deleteItem = (id) => {
    let delItem = JSON.parse(localStorage.getItem('blogData'))[id];
    let dataArray = JSON.parse(localStorage.getItem('blogData'));
    let newDataArray = dataArray.filter(object => delItem.id !== object.id);
    localStorage.setItem('blogData', JSON.stringify(newDataArray));
    this.setState({});
  }

  render() {
    const data = JSON.parse(localStorage.getItem('blogData'));
    return (
      <div className="all-items-wrap ">
        <div className='header'>
          <h1>Sayer</h1>
          <p>World’s most used time waster</p>
        </div>
          { data === null
          ? <div className='message'>Add new item</div> 
          : data.map((obj, key) =>
            <NewItem key={key}
              newItem={obj.newItem}
              id={obj.id}
              comments={this.counter(obj.comment)}
              deleteItem={() => this.deleteItem(key)}
            />
          )}
          <Link to='/newitem'>
            <AddItemButton />
          </Link>
      </div>
    );
  }
}

export default AllItemsPage;
