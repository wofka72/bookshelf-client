import React from 'react';
import { Route, Link } from 'react-router-dom';

import BooksAPI from '../api';
import RemoveButton from './RemoveButton';
import ActionButton from './ActionButton';
import Filter from './Filter';

import './Bookshelf.css';


class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      filteredBooks: [],
    };

    BooksAPI.setUpdateAllBooksFunc(this.updateBooks.bind(this));
  }

  updateBooks() {
    BooksAPI.all(
      (response) => { this.setState({ books: response.data, filteredBooks: response.data }); console.log(response); },
      (error) => { console.log(error); }
    );
  }

  componentWillMount() {
    this.setState({
      filteredBooks: this.state.books
    });
  }

  componentDidMount() {
    BooksAPI.updateAllBooks();
  }

  handleFilter(filterClause) {
    var updatedList = this.state.books;
    updatedList = updatedList.filter(function(item) {
      return item.title.toLowerCase().search(filterClause.toLowerCase()) !== -1 ||
             item.author.toLowerCase().search(filterClause.toLowerCase()) !== -1 ||
             item.publisher.toLowerCase().search(filterClause.toLowerCase()) !== -1 ||
             item.description.toLowerCase().search(filterClause.toLowerCase()) !== -1;
    });
    this.setState({
      filteredBooks: updatedList
    });
  }

  render() {
    return (
      <div>
        <Link to='/books/add'>
          <button type="button" className="btn btn-success">
            Add book
          </button>
        </Link>

        <Filter handleFilter={this.handleFilter.bind(this)} />

        <div className="row">
          {
            this.state.filteredBooks.map(book => (

              <div key={book.id} className="col-md-3">
                <div className="card mb-3 box-shadow">
                  {/* <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap" /> */}
                  <div className="card-body">
                    <div className="card-text">
                      <h3><small>{book.title}</small></h3>
                      <h5><small><i>{book.author}</i></small></h5>
                      <h6><small>{ (book.description.length < 83) ? book.description : (book.description.substr(0, 80) + "...") }</small></h6>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Route render={(props) => (
                            <ActionButton {...props} className="btn btn-sm btn-outline-info" redirectTo={`/books/${book.id}`} title="View" />
                        )}/>
                        <Route render={(props) => (
                            <ActionButton {...props} className="btn btn-sm btn-outline-warning" redirectTo={`/books/update/${book.id}`} title="Update" />
                        )}/>
                        <RemoveButton className="btn btn-sm btn-outline-danger" redirectTo="/books" title="Remove" bookId={book.id} bookTitle={book.title} bookAuthor={book.author} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Bookshelf
