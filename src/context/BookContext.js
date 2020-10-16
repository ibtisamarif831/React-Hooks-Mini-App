import React, {createContext,useEffect,useState} from 'react';
import uuid from 'uuid/dist/v4'

export const BookContext=createContext()


const BookContextProvider=(props)=>{
    const [books, setBooks]= useState(
        [
            {title: '12 rules of life', author:'Muneeb hashmi', id:1 },
            {title: 'My dear love', author:'Ibtisam arif', id:2},
            {title:'how i met your mother', author:'mr perfect', id:3}
        ], 
    );
    const addBooks=(title, author)=>{
        setBooks([...books, {title , author, id: uuid()}])
    }
    const removeBook=(id)=>{
        setBooks(books.filter(book=> book.id!== id))  //filters and keeps the value returning true and removes the false ones.
    }
    useEffect(()=>{
        localStorage.setItem("Books", JSON.stringify(books))
    },[books])
    return(
        <BookContext.Provider value={{books, addBooks, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;