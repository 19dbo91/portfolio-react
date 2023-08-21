/*
    WHEN I view the header
        THEN I am presented with the developer's name and navigation with titles 
            corresponding to different sections of the portfolio
       
    * A single `Header` component that appears on multiple pages
*/
import React from 'react';
import Navigation from './Navigation';

const name = "Dustin Bonilla";

const styles = {
    h1:'px-5 pt-5 text-5xl text-[#00A6FB] bg-[#223843]',
};

const Header =( { handlePageChange } ) =>{
    return (
        <div>
            <h1 class={styles.h1}>{name}</h1>
            <Navigation handlePageChange={handlePageChange}/>
        </div>
    );
};

export default Header;