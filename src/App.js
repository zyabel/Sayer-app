import React, { Component } from 'react';
import AllItemsPage from './components/AllItemsPage/AllItemsPage';
import NewItemPage from './components/NewItemPage/NewItemPage';
import ItemCommentsPage from './components/ItemCommentsPage/ItemCommentsPage';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={AllItemsPage} />
          <Route path='/newitem' component={NewItemPage} />
          <Route path='/comments/:id' component={ItemCommentsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
