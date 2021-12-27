import React from 'react';
import Header from './Header';
import Books from './Books';
import SearchButton from './SearchButton';

const Main = (props) => (
  <div className='list-books'>
    <Header />
    <div className='list-books-content'>
      <div>
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>Currently Reading</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              {props.listOfBooks
                .filter((book) => book.shelf === 'currentlyReading')
                .map((book) => (
                  <li key={book.id}>
                    <Books
                      book={book}
                      handleChangeShelf={props.handleChangeShelf}
                      stateShelf='currentlyReading'
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>Want to Read</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              {props.listOfBooks
                .filter((book) => book.shelf === 'wantToRead')
                .map((book) => (
                  <li key={book.id}>
                    <Books
                      book={book}
                      handleChangeShelf={props.handleChangeShelf}
                      stateShelf='wantToRead'
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>Read</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              {props.listOfBooks
                .filter((book) => book.shelf === 'read')
                .map((book) => (
                  <li key={book.id}>
                    <Books
                      book={book}
                      handleChangeShelf={props.handleChangeShelf}
                      stateShelf='read'
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
    <SearchButton />
  </div>
);

export default Main;
