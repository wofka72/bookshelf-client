import axios from 'axios';

// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const BooksAPI = {
  updateAllBooksFunc: null,
  updateCurrentBookFunc: null,

  setUpdateAllBooksFunc: function(updateFunc) {
    this.updateAllBooksFunc = updateFunc;
  },

  updateAllBooks: function() {
    if (this.updateAllBooksFunc) {
      this.updateAllBooksFunc();
    }
  },

  setUpdateCurrentBookFunc: function(updateFunc) {
    this.updateCurrentBookFunc = updateFunc;
  },

  updateCurrentBook: function() {
    if (this.updateCurrentBookFunc) {
      this.updateCurrentBookFunc();
    }
  },

  all: function(successFunc, failFunc) {
    axios.get('http://localhost:9191/books/')
      .then(response => { if (successFunc) { successFunc(response); console.log("get-all success"); } })
      .catch(error => { if (failFunc) { failFunc(error); console.log("get-all fail"); } });
  },

  get: function(id, successFunc, failFunc) {
    axios.get('http://localhost:9191/books/' + id.toString())
      .then(response => { if (successFunc) { successFunc(response); console.log("get success"); } })
      .catch(error => { if (failFunc) { failFunc(error); console.log("get fail"); } });
  },

  add: function(bookInfo, successFunc, failFunc) {
    axios.post('http://localhost:9191/books', bookInfo)
      .then(response => { if (successFunc) { successFunc(response); console.log("add success"); } })
      .catch(error => { if (failFunc) { failFunc(error); console.log("add fail"); } });
  },

  update: function(id, bookInfo, successFunc, failFunc) {
    axios.put('http://localhost:9191/books/' + id.toString(), bookInfo)
      .then(response => { if (successFunc) { successFunc(response); console.log("update success"); } })
      .catch(error => { if (failFunc) { failFunc(error); console.log("update fail"); } });
  },

  remove: function(id, successFunc, failFunc) {
    axios.delete('http://localhost:9191/books/' + id.toString())
      .then(response => { if (successFunc) { successFunc(response); console.log("remove success"); } })
      .catch(error => { if (failFunc) { failFunc(error); console.log("remove fail"); } });
  },
}

export default BooksAPI;
