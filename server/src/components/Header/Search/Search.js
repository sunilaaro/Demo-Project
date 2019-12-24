import React from 'react';
import './Search.css';
const Search = (props) =>{
    return (
        <div className="search">
            <input type="text" name="search" placeholder="Type here to filter posts...."/>
            <button className="searchBtn">Search</button>
        </div>
    );
}

export default Search;