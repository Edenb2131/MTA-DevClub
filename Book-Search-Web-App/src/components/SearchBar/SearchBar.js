import React, { useState} from "react";
import "./SearchBar.css";

const SearchBar = (props) => {

    // const books = [
    //     "The Lord of the Rings",
    //     "The Hobbit",
    //     "The "
    // ]

    console.log(props.books);

    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleClickSearch = () => {
        alert("clicked");
        setSearchTerm("");
        
    }

    const filterSearch = props.books.filter(book => {
        return book.includes(searchTerm);
    })

    
    
    const shouldDisableSearchButton = searchTerm.length > 2;
    const hasMoreBooks = searchTerm.length < 11;

    return (
        <div>
            <input className ="SearchBar" type="text" value={searchTerm} onChange={handleInputChange} /> 
            {(hasMoreBooks && shouldDisableSearchButton )&& <button onClick={handleClickSearch}> Search </button>}

            <ul>
                {filterSearch.map(book => {
                    return <li key={book}>{book}</li>;
                })}
            </ul>

        </div>
    );


}

export default SearchBar;


