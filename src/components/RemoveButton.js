import React from 'react';
import { Route } from 'react-router-dom';

import BooksAPI from '../api';

var $ = require('jquery');
global.jQuery = require("jquery");
window.$ = $;
require('bootstrap');
var bootbox = require('bootbox');


class RemoveButton extends React.Component {
  render() {
    return (
      <Route render={(props) => (
        <div>
          <button type="button" className={this.props.className} onClick={() => {
              bootbox.confirm({
                  title: "Remove the book?",
                  message: "Do you want to remove the book \"" + this.props.bookTitle + "\" written by " + this.props.bookAuthor + "? This cannot be undone.",
                  buttons: {
                      cancel: {
                          label: '<i class="fa fa-times"></i> No!'
                      },
                      confirm: {
                          label: '<i class="fa fa-times">Yes</i>'
                      }
                  },
                  callback: (result) => {
                      if (result) {
                        BooksAPI.remove(this.props.bookId,
                          (response) => { BooksAPI.updateAllBooks(); console.log(response); },
                          (error) => { console.log(error); }
                        );
                        props.history.push(this.props.redirectTo);
                      }
                  }
              });
            }}
          >{this.props.title}</button>
        </div>
      )}/>
    );
  }
}

export default RemoveButton;
