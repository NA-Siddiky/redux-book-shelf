import React, { useEffect, useState } from 'react';
import Book from '../components/Book/Book';
// import books from '../fakeData/books.json'
import PageLayout from '../components/PageLayout/PageLayout';
import axios from 'axios';
const Discover = () => {

    const [books, setBooks]= useState([]);
    useEffect(() => {
        axios.get(`https://blooming-garden-91229.herokuapp.com/allBook`)
        .then(response => {setBooks(response.data)})
    },[])


    return (
        
        <PageLayout>
            {
                books.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;