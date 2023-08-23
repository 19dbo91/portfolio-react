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

const themeColor = {        //https://coolors.co/223843-eff1f3-dbd3d8-00a6fb-4a051c
    main: "#223843",        //60%
    secondary: "#EFF1F3",   //30%
    accent: "#00A6FB"       //10%
};


const styles = { 
    list: `pl-5 pt-2 grid grid-cols-12 bg-[${themeColor.accent}] border-[${themeColor.main}]`,
    listActiveItem: `text-[${themeColor.secondary}] font-bold text-center content-center bg-[${themeColor.main}] rounded-t-lg hover:transition-all`,
    listItem: `text-[${themeColor.main}] text-center border-2 border-[${themeColor.accent}] rounded-t-lg hover:border-[${themeColor.main}] active:bg-[${themeColor.main}] active:text-[${themeColor.secondary}] hover:transition-all`,
};

const Navigation = ( {pageContent, handlePageChange} ) => {
    return (
        <div>
            <ul class={styles.list}>
                <a href="#about"
                    class={ pageContent ==='About'
                        ? (styles.listActiveItem)
                        : (styles.listItem)
                    }
                    onClick={() => handlePageChange('About') } >
                        <li>
                            About
                        </li>
                </a>
                <a href="#portfolio"
                    class={ pageContent ==='Portfolio'
                        ? (styles.listActiveItem)
                        : (styles.listItem)
                    }
                    onClick={() => handlePageChange('Portfolio') } >
                        <li>
                            Portfolio
                        </li>
                </a>
                <a href="#contact"
                    class={ pageContent ==='Contact'
                        ? (styles.listActiveItem)
                        : (styles.listItem)
                    }
                    onClick={() => handlePageChange('Contact') } >
                        <li>
                            Contact
                        </li>
                </a>
                <a href="#resume"
                    class={ pageContent ==='Resume'
                        ? (styles.listActiveItem)
                        : (styles.listItem)
                    }
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