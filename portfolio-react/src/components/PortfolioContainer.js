/*
    WHEN I load the portfolio
        THEN I am presented with a page containing
            a header,
            a section for content,
            and a footer

    * Important*: Be sure to push your codebase to the default branch in GitHub --
    * NOT your built and deployed code.
    * Ensure this happens by using the `gh-pages` branch to host the deployed application's build.
*/
import React from 'react';
import Header from './Header';
import CurrentPage from './pages/CurrentPage';
import Footer from './Footer';


const styles = {};

const PortfolioContainer = () => {
    return (
        <div>
            <Header />
            <p> Begin Page</p>
            <CurrentPage />
            <p> End Page</p>
            <Footer />
        </div>
    );
};


export default PortfolioContainer;