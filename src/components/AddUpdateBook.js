import React from 'react';
import { Route } from 'react-router-dom';

import BooksAPI from '../api';
import InputForm from './InputForm';
import ActionButton from './ActionButton';


class AddUpdateBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      publisher: "",
      pagescount: 0,
      description: ""
    };
  }

  onTitleChanged(value) {
    this.setState({ title: value });
  }
  onAuthorChanged(value) {
    this.setState({ author: value });
  }
  onPublisherChanged(value) {
    this.setState({ publisher: value });
  }
  onPagesCountChanged(value) {
    var result = parseInt(value, 10);
    if (!result) {
      result = 0;
    }
    this.setState({ pagescount: result });
  }
  onDescriptionChanged(value) {
    this.setState({ description: value });
  }

  addBook() {
    BooksAPI.add({
        title: this.state.title,
        author: this.state.author,
        publisher: this.state.publisher,
        pagescount: this.state.pagescount,
        description: this.state.description
      },
      (response) => { BooksAPI.updateAllBooks(); console.log(response); },
      (error) => { console.log(error); }
    );
  }

  updateBook() {
    BooksAPI.update(this.props.match.params.bookId, {
        title: this.state.title,
        author: this.state.author,
        publisher: this.state.publisher,
        pagescount: this.state.pagescount,
        description: this.state.description
      },
      (response) => { BooksAPI.updateCurrentBook(); console.log(response); },
      (error) => { console.log(error); }
    );
  }

  componentDidMount() {
    if (this.props.isUpdate) {
      BooksAPI.get(this.props.match.params.bookId,
        (response) => { this.setState(response.data); console.log(response); },
        (error) => { console.log(error); }
      );
    }
  }

  render() {
    return (
      <div>
        {this.props.isUpdate ?
          <div>
            <Route render={(props) => (
                <ActionButton {...props} className="btn btn-secondary" redirectTo='/books' title="To bookshelf" />
            )}/>
            &nbsp;&nbsp;
            <Route render={(props) => (
                <ActionButton {...props} className="btn btn-secondary" redirectTo={`/books/${this.props.match.params.bookId}`} title="To book" />
            )}/>
          </div>
          :
          <Route render={(props) => (
              <ActionButton {...props} className="btn btn-secondary" redirectTo='/books' title="To bookshelf" />
          )}/>
        }


        <form>
          <InputForm onValueChanged={this.onTitleChanged.bind(this)} title="Title" value={this.state.title} placeholder="Title" id="TitleInput" />
          <InputForm onValueChanged={this.onAuthorChanged.bind(this)} title="Author" value={this.state.author} placeholder="Author" id="AuthorInput" />
          <InputForm onValueChanged={this.onPublisherChanged.bind(this)} title="Publisher" value={this.state.publisher} placeholder="Publisher" id="PublisherInput" />
          <InputForm onValueChanged={this.onPagesCountChanged.bind(this)} title="Pages count" value={this.state.pagescount} placeholder="Pages count" id="PagesCountInput" />
          <InputForm onValueChanged={this.onDescriptionChanged.bind(this)} title="Description" value={this.state.description} placeholder="Description" id="DescriptionInput" />
          <Route render={(props) => (
            <ActionButton {...props}
              redirectTo={this.props.isUpdate ? `/books/${this.props.match.params.bookId}` : "/books"}
              onClick={this.props.isUpdate ? this.updateBook.bind(this) : this.addBook.bind(this)}
              title={this.props.isUpdate ? "Update book" : "Add book"}
              className={this.props.isUpdate ? "btn btn-warning" : "btn btn-success"}
            />
          )}/>
        </form>
      </div>
    );
  }
}

export default AddUpdateBook;
