import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';

const Navbar=()=>{
    const {books} = useContext(BookContext)
    return(
        <div className="navbar">
            <h1>My book list</h1>
            <p>Currently I have { books.length } books to read</p>

        </div>
    )
}
export default Navbar;