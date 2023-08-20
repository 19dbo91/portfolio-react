/*
    * WHEN I view the navigation titles
        THEN I am presented with the titles 
            About Me,
            Portfolio,
            Contact, and 
            Resume, and
        the title corresponding to the current section is highlighted
    
    * WHEN I click on a navigation title
        THEN I am presented with the corresponding section
        below the navigation without the page reloading and that title is highlighted

    * A single `Navigation` component within the header that will be used
        to conditionally render the different sections of your portfolio
*/

import React, { useState } from 'react';
//import Header from './Header';


const Navigation = ( {handlePageChange} ) => {
    return (
        <div>
            <ul>
                <li><a href="#about" onClick={() => handlePageChange('About') }>About</a></li>
                <li><a href="#portfolio" onClick={() => handlePageChange('Portfolio') }>Portfolio</a></li>
                <li><a href="#contact" onClick={() => handlePageChange('Contact') }>Contact</a></li>
                <li><a href="#resume" onClick={() => handlePageChange('Resume') }>Resume</a></li>
            </ul>
        </div>
    );
};

export default Navigation;