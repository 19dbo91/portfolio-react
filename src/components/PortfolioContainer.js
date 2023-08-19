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
import React from 'react';
import Header from 'Header';
import CurrentPage from './pages/CurrentPage';
import Footer from 'Footer';


const styles = {};

const PortfolioContainer =() =>{
    return (
        <div>
            <Header />
            <CurrentPage />
            <Footer />
        </div>
    );
};


export default PortfolioContainer;