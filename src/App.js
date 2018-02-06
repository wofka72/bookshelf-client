import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


class OperationsTitle extends React.Component {
  render() {
    return (
      <div>
        If you want to add, update or remove a book than look below!
        <br />
      </div>
    );
  }
}

class TitleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({title: event.target.value});
    this.props.onTitleChanged(event.target.value);
  }
  render() {
    return (
      <form>
        <label>Title:</label>
        <input onChange={this.handleChange}
          value={this.state.title}
        />
      </form>
    )
  }
}

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({author: event.target.value});
    this.props.onAuthorChanged(event.target.value);
  }
  render() {
    return (
      <form>
        <label>Author:</label>
        <input onChange={this.handleChange}
          value={this.state.author}
        />
      </form>
    )
  }
}

class PublisherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({publisher: event.target.value});
    this.props.onPublisherChanged(event.target.value);
  }
  render() {
    return (
      <form>
        <label>Publisher:</label>
        <input onChange={this.handleChange}
          value={this.state.publisher}
        />
      </form>
    )
  }
}

class PagesCountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var pagesCount = parseInt(event.target.value, 10);
    this.setState({pagescount: pagesCount});
    this.props.onPagesCountChanged(pagesCount);
  }
  render() {
    return (
      <form>
        <label>Pages count:</label>
        <input onChange={this.handleChange}
          value={this.state.pagescount}
        />
      </form>
    )
  }
}

class DescriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({description: event.target.value});
    this.props.onDescriptionChanged(event.target.value);
  }
  render() {
    return (
      <form>
        <label>Description:</label>
        <input onChange={this.handleChange}
          value={this.state.description}
        />
      </form>
    )
  }
}

class IDForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var id = parseInt(event.target.value, 10);
    this.setState({id: id});
    this.props.onIDChanged(id);
  }
  render() {
    return (
      <form>
        <label>ID:</label>
        <input type="number" onChange={this.handleChange}
          value={this.state.id}
        />
      </form>
    )
  }
}

class AddBookButton extends React.Component {
  handleSubmit(event) {
    this.props.addBook();
    event.preventDefault();

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="submit" value="Add book" />
          (always last)
        </form>
      </div>
    );
  }
}

class UpdateBookButton extends React.Component {
  handleSubmit(event) {
    this.props.updateBook();
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="submit" value="Update book" />
        --(use id)
      </form>
    );
  }
}

class RemoveBookButton extends React.Component {
  handleSubmit(event) {
    this.props.removeBook();
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="submit" value="Remove book" />
        --(use id)
      </form>
    );
  }
}

class BookOperations extends React.Component {
  render() {
    return (
      <div>
        <AddBookButton addBook={this.props.addBook}/>
        <UpdateBookButton updateBook={this.props.updateBook}/>
        <RemoveBookButton removeBook={this.props.removeBook}/>
      </div>
    );
  }
}

class BookOperationsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", author: "", publisher: "", pagescount: 0, description: "", id: 0};
  }
  onTitleChanged(value) {
    this.setState({title: value});
  }
  onAuthorChanged(value) {
    this.setState({author: value});
  }
  onPublisherChanged(value) {
    this.setState({publisher: value});
  }
  onPagesCountChanged(value) {
    this.setState({pagescount: value});
  }
  onDescriptionChanged(value) {
    this.setState({description: value});
  }
  onIDChanged(value) {
    this.setState({id: value});
  }
  addBook() {
    this.props.addBook(this.state);
  }
  updateBook() {
    this.props.updateBook(this.state);
  }
  removeBook() {
    this.props.removeBook(this.state.id);
  }
  render() {
    return (
      <div>
        <OperationsTitle />
        <br />
        <TitleForm onTitleChanged={this.onTitleChanged.bind(this)} />
        <br />
        <AuthorForm onAuthorChanged={this.onAuthorChanged.bind(this)} />
        <br />
        <PublisherForm onPublisherChanged={this.onPublisherChanged.bind(this)} />
        <br />
        <PagesCountForm onPagesCountChanged={this.onPagesCountChanged.bind(this)} />
        <br />
        <DescriptionForm onDescriptionChanged={this.onDescriptionChanged.bind(this)} />
        <br />
        <IDForm onIDChanged={this.onIDChanged.bind(this)} />
        <br />
        <BookOperations addBook={this.addBook.bind(this)}
                        updateBook={this.updateBook.bind(this)}
                        removeBook={this.removeBook.bind(this)}
        />
      </div>
    );
  }
}

class BookSection extends React.Component {
  render() {
    return (
      <li>
        ID: {this.props.id} <br />
        Title: {this.props.title} <br />
        Author: {this.props.author} <br />
        Publisher: {this.props.publisher} <br />
        Count of pages: {this.props.pagescount} <br />
        Description: {this.props.description} <br />
        <br />
      </li>
    );
  }
}

class BookListSection extends React.Component {
  render() {
    return (
      <ul>
        {this.props.books.map( book => {
            return (
              <BookSection id={book.id}
                title={book.title}
                author={book.author}
                publisher={book.publisher}
                pagescount={book.pagescount}
                description={book.description}
              />
            );
          }
        )}
      </ul>
    );
  }
}

class LibrarySection extends React.Component {
  constructor(props) {
    super(props);

    this.state = { books: [] };
    this.updateBooksList();
  }
  updateBooksList() {
    axios.get('http://localhost:9191/books/')
      .then(response => {
        this.setState({
          books: response.data
        });
        console.log("books has updated");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  addBook(book) {
    let thisObj = this;

    axios.post('http://localhost:9191/books', book)
      .then(function (response) {
        thisObj.updateBooksList();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  updateBook(bookInfo) {
    let thisObj = this;

    axios.put('http://localhost:9191/books/' + bookInfo.id.toString(), bookInfo)
      .then(function (response) {
        thisObj.updateBooksList();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  removeBook(id) {
    let thisObj = this;

    axios.delete('http://localhost:9191/books/' + id.toString())
      .then(function (response) {
        thisObj.updateBooksList();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <BookListSection books={this.state.books} />
        <BookOperationsSection addBook={this.addBook.bind(this)}
                               updateBook={this.updateBook.bind(this)}
                               removeBook={this.removeBook.bind(this)}
        />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <LibrarySection />
      </div>
    );
  }
}

export default App;
