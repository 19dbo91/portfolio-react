/*
    WHEN I view the footer
        THEN I am presented with text or icon links to the developer’s 
            GitHub and 
            LinkedIn profiles, 
            and their profile on a third platform (Stack Overflow, Twitter)

    * A single `Footer` component that appears on multiple pages
*/
import React from 'react';

const GitHub = {
    href: 'https://github.com/19dbo91',
    icon: '',
    alt: 'Link to Git Hub profile of Dustin Bonilla',
}
const LinkedIn = {
    href: 'https://www.linkedin.com/in/dustin-bonilla-503110172/',
    icon: '',
    alt: 'Link to Linked In profile of Dustin Bonilla',
}
const AnotherLink = {
    href:'',
    icon:'',
    alt:'',
};

const links = ([GitHub, LinkedIn, AnotherLink]) =>{
    return 
}

const styles = {};

const Footer = () =>{
    return (
        <div>
            {/* <Icon link=/>  */}
            {/* <Icon link=/>  */}
            {/* <Icon link=/>  */} 
        </div>
    );
};

export default Footer;