import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import Book from './Book';
import AddUpdateBook from './AddUpdateBook';


const Books = () => (
  <div className="container">
    <Switch>
      <Route exact path='/books' component={Bookshelf}/>
      <Route path='/books/add' render={(props) => {
          return (<AddUpdateBook {...props} isUpdate={false} />);
      }}/>
      <Route path='/books/update/:bookId' render={(props) => {
          return (<AddUpdateBook {...props} isUpdate={true} />);
      }}/>
      <Route path='/books/:bookId' component={Book}/>
    </Switch>
  </div>
);

export default Books
