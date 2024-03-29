import React from 'react';

const Books = (props) => (
  <div className='book'>
    <div className='book-top'>
      <div
        className='book-cover'
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url("${
            props.book.imageLinks ? props.book.imageLinks.thumbnail : ''
          }")`,
        }}
      />
      <div className='book-shelf-changer'>
        <select
          onChange={(e) => props.handleChangeShelf(props.book, e.target.value)}
          value={props.stateShelf}
        >
          <option value='move' disabled>
            Move to...
          </option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    </div>
    <div className='book-title'>{props.book.title}</div>
    <div className='book-authors'>
      {props.authors ? props.authors[0] : 'No Author'}
    </div>
  </div>
);

export default Books;
