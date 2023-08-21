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

const styles = { //https://coolors.co/223843-eff1f3-dbd3d8-00a6fb-4a051c
    list: "pt-2 grid grid-cols-12 bg-[#00A6FB] border-[#223843]",
    listStartItem: "col-start-2 text-[#223843] text-center  border-2 border-[#00A6FB] rounded-t-lg hover:border-[#223843] active:bg-[#223843] active:text-[#EFF1F3] hover:transition-all",
    listItem: "text-[#223843] text-center border-2 border-[#00A6FB] rounded-t-lg hover:border-[#223843] active:bg-[#223843] active:text-[#EFF1F3] hover:transition-all",
};

const Navigation = ( {handlePageChange} ) => {
    return (
        <div>
            <ul class={styles.list}>
                <a href="#about"
                    class={styles.listStartItem}
                    onClick={() => handlePageChange('About') } >
                        <li>
                            About
                        </li>
                </a>
                <a href="#portfolio"
                    class={styles.listItem}
                    onClick={() => handlePageChange('Portfolio') } >
                        <li>
                            Portfolio
                        </li>
                </a>
                <a href="#contact"
                    class={styles.listItem}
                    onClick={() => handlePageChange('Contact') } >
                        <li>
                            Contact
                        </li>
                </a>
                <a href="#resume"
                    class={styles.listItem}
                    onClick={() => handlePageChange('Resume') } >
                        <li>
                            Resume
                        </li>
                </a>
            </ul>
        </div>
    );
};

export default Navigation;