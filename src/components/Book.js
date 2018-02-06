import React from 'react';
import { Route, Link } from 'react-router-dom';

import ActionButton from './ActionButton';
import RemoveButton from './RemoveButton';
import BooksAPI from '../api';


class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: { title: "", author: "", publisher: "", pagescount: 0, description: "" },
      loaded: false
    };

    BooksAPI.setUpdateCurrentBookFunc(this.updateCurrentBook.bind(this));
  }

  updateCurrentBook() {
    var id = parseInt(this.props.match.params.bookId, 10);
    this.setState({ loaded: false });
    BooksAPI.get(id,
      (response) => { this.setState({ book: response.data, loaded: true }); console.log(response); },
      (error) => { console.log(error); }
    );
  }

  componentDidMount() {
    BooksAPI.updateCurrentBook();
  }

  render() {
    if (!this.state.loaded) {
      return (<div>
        <p><Link to='/books/'><button className="btn btn-sm btn-outline-secondary">To bookshelf</button></Link></p>
        Sorry, but the book was not found
      </div>);
    }

    return (
      <div>
        <p><Link to='/books/'><button className="btn btn-secondary">To bookshelf</button></Link></p>
        <h3>{this.state.book.title}</h3>
        <h5><i>{this.state.book.author}</i></h5>
        <h6>{this.state.book.description}</h6>
        <br/>
        <h6>Additional info</h6>
        <h6><small>Publisher: {this.state.book.publisher}</small></h6>
        <h6><small>Pages count: {this.state.book.pagescount}</small></h6>

        <div>
          <Route render={(props) => (
            <ActionButton {...props} className="btn btn-warning" redirectTo={`/books/update/${this.props.match.params.bookId}`} title="Update" />
          )}/>
          &nbsp;&nbsp;
          <RemoveButton className="btn btn-danger"
            redirectTo="/books"
            title="Remove"
            bookId={this.props.match.params.bookId}
            bookTitle={this.state.book.title}
            bookAuthor={this.state.book.author}
          />
        </div>
      </div>
    )
  }
}

export default Book
