import React, {useEffect, useState} from "react";
import CountButton from "./CountButtom/CountButton.js";
import SearchBar from "./SearchBar/SearchBar.js";
import "./App.css";


const App = () => {

    const [bookState, setBookState] = useState([]);
    // const [BookStateTitle, setBookStateTitle] = useState([]);

    useEffect(() => {
        console.log("useEffect called");
        fetch("https://fakestoreapi.com/products")
           .then(res => res.json())
           .then(booksArray => {
            //    console.log("im here");
               const newBookState = booksArray.map((book) => {
                // console.log(book);
                // console.log(book.title);
                   return book.title
               })
               setBookState(newBookState);
               
           })
        
        //Wanting to do another fatch so i can present the clicked box
        
        
        // fetch("https://fakestoreapi.com/products")
        //    .then(res => res.json())
        //    .then(booksArrayT => {
        //     //    console.log("im here");
        //        const newBookStateTitle = booksArrayT.map((book) => {
        //         // console.log(book);
        //         // console.log(book.title);
        //            return book.title
        //        })
        //        setBookState(newBookStateTitle);
               
        //       })


    }, [])
    // console.log(BookStateTitle);
    // console.log(bookState);
    

    // const books = [
    //     "The Lord of the Rings",
    //     "The Hobbit",
    //     "The "
    // 
    
    const hasBooks = bookState.length > 0;

    return (
        <div>
            <div className="WellcomeHeader">  Wellcome to my website ! </div>
            {/* <SearchBar books={bookState} /> */}
            {hasBooks ? <SearchBar books={bookState} /> : "Loading..." }


           {/* <CountButton /> */}
        </div>
    );
}
    
export default App;
