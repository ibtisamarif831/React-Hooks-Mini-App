import { ready } from 'jquery';
import React, {useContext} from 'react';
import Book from '../Book';
import BookDetails from './BookDetails'
import { BookContext } from '../context/BookContext';
const BookList = () => {
    const {books}=useContext(BookContext)

    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book=>{
                    return (<BookDetails book={book} key={book.id}/>)
                })}
            </ul>
        </div>
        ) : (
            <div className="empty">No Books To ready, will add new ones</div>
        )

    }

export default BookList;