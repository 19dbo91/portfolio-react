/*    WHEN I view the navigation titles
        THEN I am presented with the titles 
            About Me,
            Portfolio,
            Contact, and 
            Resume, and
        the title corresponding to the current section is highlighted
    
    WHEN I click on a navigation title
        THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

    * A single `Navigation` component within the header that will be used to conditionally render the different sections of your portfolio
 */
import React from 'react';

const styles = {};



const Navigation =() => {
    return (
        <div>
            <a href="#about" onClick = {()=> handlePage() }>About</a>
            <a href="#portfolio" onClick = {()=> handlePage() }>Portfolio</a>
            <a href="#contact" onClick = {()=> handlePage() }>Contact</a>
            <a href="#resume" onClick = {()=> handlePage() }>Resume</a>
        </div>
    );
}

export default Navigation;