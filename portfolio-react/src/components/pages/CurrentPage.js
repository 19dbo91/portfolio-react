/*
    WHEN I load the portfolio the first time
        THEN the About Me title and section are selected by default
*/

//handles current page shown
import React, { useState } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";


const CurrentPage =({})=>{
    const [pageContent, setPageContent] = useState('');
    
    const renderPage = (pageContent) => {
        switch (pageContent){
            case 'Portfolio': return <Portfolio />;
            case 'Resume': return <Resume />;
            case 'Contact': return <Contact />
            case 'About':
            default:
                return <About />
        };
    };

    const handlePage = (page) => setPageContent(page);

    return (
        <div>
            {renderPage()}
        </div>
    );
} 

export default CurrentPage;