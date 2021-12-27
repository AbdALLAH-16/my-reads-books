import React, { Component } from 'react';
import Books from './Books';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';

export default class Search extends Component {
  state = {
    query: '',
    books: [],
  };

  handleUpdateSearch = (query) => {
    this.setState({ query });
    this.searchBooks(query);
  };

  searchBooks = (query) => {
    if (query.trim()) {
      search(query).then((books) => {
        if (books.error) {
          this.setState({ books: [] });
        } else {
          this.setState({ books });
        }
      });
    } else {
      this.setState({ books: [] });
    }
  };

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to={'/'}>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(e) => this.handleUpdateSearch(e.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.books.map((books) => {
              let shelf = 'none';

              this.props.books.map((book) =>
                book.id === books.id ? (shelf = book.shelf) : ''
              );
              return (
                <li key={books.id}>
                  <Books
                    book={books}
                    handleChangeShelf={this.props.handleChangeShelf}
                    stateShelf={shelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
