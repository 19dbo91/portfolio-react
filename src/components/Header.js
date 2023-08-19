/*
    WHEN I view the header
        THEN I am presented with the developer's name and navigation with titles 
            corresponding to different sections of the portfolio

    * A single `Header` component that appears on multiple pages
*/
import React from 'react';
import Navigation from './Navigation';

const name = "Dustin Bonilla";

const styles = {};

// <Navigation />

const Header =() =>{
    return (
        <div>
            <h1>{name}</h1>
            <Navigation />
        </div>
    );
};

export default Header;