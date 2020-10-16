import React, {useContext, useState} from 'react';
import {BookContext} from '../context/BookContext'


const NewBookForm = () => {
    const {addBooks}=useContext(BookContext)
    const [title, setTitle]=useState('')
    const [author, setAuthor]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        addBooks(title, author)
        setTitle('')
        setAuthor('');
    }
    return (     
        <div>       
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='book title' value={title}
            onChange={(e)=>{setTitle(e.target.value)}} required/>

        <input type="text" placeholder='book title' value={author}
            onChange={(e)=>{setAuthor(e.target.value)}} required/>

        <input type='submit' value="add book" />
        </form>
        </div>
 
    
 );
}
 
export default NewBookForm;
