import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';
import Search from './components/Search';
import { getAll, update } from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const books = await getAll();
    this.setState({ books });
  }

  handleChangeShelf = (book, shelf) => {
    const { books } = this.state;
    const updateIndex = books.findIndex((b) => b.id === book.id);
    const updateBook = books[updateIndex];
    updateBook.shelf = shelf;

    this.setState({
      books: [
        ...books.slice(0, updateIndex),
        updateBook,
        ...books.slice(updateIndex + 1),
      ],
    });

    update(book, shelf);
  };

  render() {
    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={() => (
            <Main
              listOfBooks={this.state.books}
              handleChangeShelf={this.handleChangeShelf}
            />
          )}
        />

        <Route
          exact
          path='/search'
          render={() => (
            <Search
              handleChangeShelf={this.handleChangeShelf}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
