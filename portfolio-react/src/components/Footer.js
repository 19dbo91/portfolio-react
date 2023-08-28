/*
    WHEN I view the footer
        THEN I am presented with text or icon links to the developer’s 
            GitHub and 
            LinkedIn profiles, 
            and their profile on a third platform (Stack Overflow, Twitter)

    * A single `Footer` component that appears on multiple pages
*/
import React from 'react';
import Socials from './Socials';
import themeColor from '../styles/themeColor'

const socials = [
    {
        link: 'https://github.com/19dbo91',
        icon: '/img/github/iconWhite.png',
        alt: 'GitHub repository',
    },{
        link: 'https://www.linkedin.com/in/dustin-bonilla-503110172/',
        icon: '/img/linkedin/iconWhite.png',
        alt: 'LinkedIn profile',
    },{
        link: 'https://medium.com/@bonilla.dustin',
        icon: '/img/medium/iconWhite.png',
        alt: 'Medium blogsite',
    }
];

const styles = {
    footer: `m-5 bg-[${themeColor.main}] flex justify-center`,
};

const Footer = () =>{
    return (
        <div class={styles.footer} >
            <Socials
                link={socials[0].link}
                icon={socials[0].icon}
                alt={socials[0].alt}
            />
            <Socials
                link={socials[1].link}
                icon={socials[1].icon}
                alt={socials[1].alt}
            />
            <Socials
                link={socials[2].link}
                icon={socials[2].icon}
                alt={socials[2].alt}
            />
        </div>
    );
};

export default Footer;