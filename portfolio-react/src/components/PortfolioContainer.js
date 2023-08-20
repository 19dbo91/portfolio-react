/*
    WHEN I load the portfolio
        THEN I am presented with a page containing
            a header,
            a section for content,
            and a footer

    WHEN I load the portfolio the first time
        THEN the About Me title and section are selected by default

    * Important*: Be sure to push your codebase to the default branch in GitHub --
    * NOT your built and deployed code.
    * Ensure this happens by using the `gh-pages` branch to host the deployed application's build.
*/
import React, { useState } from 'react';
import Header from './Header';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from './Footer';


const styles = {};



const PortfolioContainer = () => {

    const [pageContent, setPageContent] = useState('');

    const handlePageChange = (page) => setPageContent(page);

    const renderPage = (page) => {
        switch (page){
            case 'Portfolio': return <Portfolio />;
            case 'Resume': return <Resume />;
            case 'Contact': return <Contact />
            case 'About':
            default:
                return <About />
        };
    };

    return (
        <div>
            <Header handlePageChange={handlePageChange}/>
            <p> Begin Page</p>
            {renderPage(pageContent)}
            <p> End Page</p>
            <Footer />
        </div>
    );
};


export default PortfolioContainer;