import React from 'react';
import "./Header.css";
import NavBar from '../NavBar/NavBar';
import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
    return (
        <>
        <header>
        <NavBar/>
        <SearchForm/>
            </header>
        </>
    );
}

export default Header